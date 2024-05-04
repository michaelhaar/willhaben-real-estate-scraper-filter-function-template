import type { RealEstateListing } from "real-estate-listing-schema";

export function filterRealEstateListings(realEstateListing: RealEstateListing): boolean {
  if (!isWithinPriceRange(realEstateListing)) {
    return false;
  }

  if (!isWithinPlotAreaRange(realEstateListing)) {
    return false;
  }

  return true;
}

function isWithinPriceRange(realEstateListing: RealEstateListing) {
  const { purchasingPrice } = realEstateListing.monetaryDetails;
  if (typeof purchasingPrice === "number" && purchasingPrice <= 300000) {
    return true;
  }
  return false;
}

function isWithinPlotAreaRange(realEstateListing: RealEstateListing) {
  const { plotArea } = realEstateListing.features;
  if (typeof plotArea === "number" && plotArea >= 800 && plotArea <= 3000) {
    return true;
  }
  return false;
}
