import type { RealEstateListing } from "real-estate-listing-schema";

export function filterRealEstateListings(
  realEstateListing: RealEstateListing,
): boolean {
  if (!isRentWithinPriceRange(realEstateListing, { min: 0, max: 800 })) {
    return false;
  }

  if (!isWithinLivingAreaRange(realEstateListing, { min: 40, max: 100 })) {
    return false;
  }

  const keywords = ["Margarethen", "Nestelbach", "Marein", "Hofstätten"];
  if (doesContainKeyword(realEstateListing, keywords)) {
    return true;
  }

  if (
    !isWithinBoundingBox(realEstateListing, {
      minLatitude: 46.983055931615866,
      maxLatitude: 47.09740939395638,
      minLongitude: 15.527368147324522,
      maxLongitude: 15.820755328123727,
    })
  ) {
    console.log(realEstateListing.listingId, "excluded by bounding box");
    return false;
  }

  return true;
}

function isRentWithinPriceRange(
  realEstateListing: RealEstateListing,
  { min, max }: { min: number; max: number },
) {
  const { rent } = realEstateListing.monetaryDetails;
  if (typeof rent === "number" && rent >= min && rent <= max) {
    return true;
  }
  return false;
}

function isWithinLivingAreaRange(
  realEstateListing: RealEstateListing,
  { min, max }: { min: number; max: number },
) {
  const { livingArea } = realEstateListing.features;
  if (
    typeof livingArea === "number" &&
    livingArea >= min &&
    livingArea <= max
  ) {
    return true;
  }
  return false;
}

function isWithinBoundingBox(
  realEstateListing: RealEstateListing,
  {
    minLatitude,
    maxLatitude,
    minLongitude,
    maxLongitude,
  }: {
    minLatitude: number;
    maxLatitude: number;
    minLongitude: number;
    maxLongitude: number;
  },
) {
  const { latitude, longitude } = realEstateListing.coordinates;

  if (!latitude || !longitude) {
    return false;
  }

  return (
    latitude >= minLatitude &&
    latitude <= maxLatitude &&
    longitude >= minLongitude &&
    longitude <= maxLongitude
  );
}

function isInteressingPostalCode(
  realEstateListing: RealEstateListing,
  interesstingPostalCodes: string[],
) {
  if (!realEstateListing.address.postalCode) {
    return false;
  }

  return interesstingPostalCodes.includes(realEstateListing.address.postalCode);
}

function findNeedles(haystack: string, needles: string[]) {
  const includedNeedles: string[] = [];
  needles.forEach((needle) => {
    const re = new RegExp(`\\b${needle}\\b`, "i");
    if (re.test(haystack)) {
      includedNeedles.push(needle);
    }
  });
  return includedNeedles;
}

function doesContainKeyword(
  realEstateListing: RealEstateListing,
  keywords: string[],
) {
  const { title, address, description } = realEstateListing;
  const haystack = `${title} ${address.postalCode} ${address.postalName} ${description}`;

  const includedKeywords = findNeedles(haystack, keywords);
  if (includedKeywords.length) {
    console.log(
      realEstateListing.listingId,
      "contains keywords: ",
      includedKeywords.join(", "),
    );
    return true;
  }
  return false;
}
