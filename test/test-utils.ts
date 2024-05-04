import type { RealEstateListing } from "real-estate-listing-schema";
import { generateRealEstateListingData } from "./test-data-factory.js";
import { expect } from "vitest";
import { FilterFunctionVm } from "./filter-function-vm.js";

const filterFunctionVm = new FilterFunctionVm();

export function expectFilterFunctionToReturn(expectedResult: boolean, overrides?: DeepPartial<RealEstateListing>) {
  const realEstateListing = generateRealEstateListingData(overrides);

  const result = filterFunctionVm.runFilterFunction(realEstateListing);

  expect(result).toBe(expectedResult);
}

/**
 * Merge a `source` object to a `target` recursively
 * see: https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
 * */
export function merge(target: any, source: any) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]));
  }

  Object.assign(target || {}, source);
  return target;
}

// see: https://gist.github.com/navix/6c25c15e0a2d3cd0e5bce999e0086fc9
export type DeepPartial<T> = T extends Function ? T : T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
