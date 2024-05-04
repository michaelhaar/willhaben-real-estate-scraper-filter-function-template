// Purpose: This file contains the FilterFunctionVm class which can be used to **safely** run
// the `filterRealEstateListings` function from the user input.

import ivm from "isolated-vm";
import type { RealEstateListing } from "real-estate-listing-schema";
import ts from "typescript";
import fs from "fs";

export class FilterFunctionVm {
  isolate: ivm.Isolate;
  context: ivm.Context;
  jail: ivm.Reference;

  constructor() {
    this.isolate = new ivm.Isolate({ memoryLimit: 128 });
    this.context = this.isolate.createContextSync();

    // Get a Reference{} to the global object within the context.
    this.jail = this.context.global;
    // This makes the global object available in the context as `global`
    this.jail.setSync("global", this.jail.derefInto());
    // We will create a basic `log` function for the new isolate to use.
    this.jail.setSync("log", (...args: any) => {
      console.log(...args);
    });
    this.context.evalSync(`const console = { log: log };`);

    const filterFunction = fs.readFileSync("./src/filter-function.ts").toString();
    console.log(filterFunction);
    let sanitizedFilterFunction = filterFunction.replace(/import .+ from '.+';/g, "");
    sanitizedFilterFunction = sanitizedFilterFunction.replace(/export /g, "");
    sanitizedFilterFunction = ts.transpile(sanitizedFilterFunction);
    this._createFilterFunctionInVm(sanitizedFilterFunction);
  }

  _createFilterFunctionInVm(filterFunction: string) {
    this.context.evalSync(filterFunction);
  }

  _updateRealEstateListingInVm(realEstateListing: RealEstateListing) {
    this.jail.setSync("realEstateListing", new ivm.ExternalCopy(realEstateListing).copyInto());
  }

  runFilterFunction(realEstateListing: RealEstateListing): boolean {
    this._updateRealEstateListingInVm(realEstateListing);

    try {
      const result = this.context.evalSync(`filterRealEstateListings(realEstateListing);`);
      return !!result;
    } catch (error) {
      console.error(error);
      return true;
    }
  }
}
