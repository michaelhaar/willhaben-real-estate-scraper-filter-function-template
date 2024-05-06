import { type RealEstateListing } from "real-estate-listing-schema";
import type { DeepPartial } from "./test-utils.js";
import { merge } from "./test-utils.js";

export function generateRealEstateListingData(
  overrides?: DeepPartial<RealEstateListing>,
): RealEstateListing {
  const fakeRealEstateListing = {
    listingId: "12345",
    url: "https://www.willhaben.at/iad/immobilien/d/grundstuecke/steiermark/deutschlandsberg/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-12345",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    images: [
      "https://cache.willhaben.at/mmo/3/320/075/1.jpg",
      "https://cache.willhaben.at/mmo/3/320/075/2.jpg",
      "https://cache.willhaben.at/mmo/3/320/075/3.jpg",
    ],
    propertyType: "land",
    address: {
      street: "Bad Gams",
      postalCode: "8524",
      city: "Deutschlandsberg",
      state: "Steiermark",
      country: "Österreich",
      countryCode: "AT",
    },
    coordinates: { latitude: 46.870266, longitude: 15.217262 },
    monetaryDetails: {
      purchasingPrice: 98500,
      previousPurchasingPrice: null,
      rent: null,
      previousRent: null,
      currencyCode: "EUR",
      isCommissionFree: false,
      estMonthlyOperatingCosts: null,
    },
    features: {
      livingArea: null,
      plotArea: 1184,
      yearBuilt: null,
      bedrooms: null,
      bathrooms: null,
      hasGarage: false,
      hasCarport: false,
      hasParkingSpace: false,
      hasBalcony: false,
      hasTerrace: false,
      hasGarden: false,
      hasLoggia: false,
      hasPool: null,
      hasStorageRoom: false,
      isBarrierFree: false,
      hasBuiltInKitchen: false,
      hasElevator: false,
      hasBasementCompartment: false,
      hasAirConditioning: null,
    },
    contactDetails: { name: null, phone: null, email: null },
    snapshotDate: "2024-04-24T18:23:06.970Z",
    scrapedFrom:
      "https://www.willhaben.at/iad/immobilien/grundstuecke/grundstueck-angebote?areaId=603&page=1&PLOT/AREA_FROM=800&PLOT/AREA_TO=2500&PRICE_TO=350000",
    publishedAt: "2024-04-24T15:56:00+0200",
    updatedAt: "2024-04-24T16:00:00+0200",
  } satisfies RealEstateListing;

  return overrides
    ? merge(fakeRealEstateListing, overrides)
    : fakeRealEstateListing;
}
