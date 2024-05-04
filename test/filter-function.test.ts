import { describe, test } from "vitest";
import { expectFilterFunctionToReturn } from "./test-utils.js";

test("should return true for base real estate listing (see: test-data-factory.ts)", () => {
  expectFilterFunctionToReturn(true);
});

test("should return false if price is out of scope", () => {
  expectFilterFunctionToReturn(false, {
    monetaryDetails: {
      purchasingPrice: 300001,
    },
  });
});

describe("should return false if plotArea is out of scope", () => {
  test("too small", () => {
    expectFilterFunctionToReturn(false, {
      features: {
        plotArea: 799,
      },
    });
  });

  test("too big", () => {
    expectFilterFunctionToReturn(false, {
      features: {
        plotArea: 3001,
      },
    });
  });
});
