import { type RealEstateListing } from "real-estate-listing-schema";
import type { DeepPartial } from "./test-utils.js";
import { merge } from "./test-utils.js";

export function generateRealEstateListingData(
  overrides?: DeepPartial<RealEstateListing>,
): RealEstateListing {
  const fakeRealEstateListing = {
    listingId: "1877852517",
    url: "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/steiermark/weiz/provisionsfrei-st-margarethen-an-der-raab-bau-8-gefoerderte-miete-oder-gefoerderte-miete-mit-kaufoption-2-zimmer-1877852517",
    title:
      "PROVISIONSFREI - St. Margarethen an der Raab Bau 8 - geförderte Miete ODER geförderte Miete mit Kaufoption - 2 Zimmer",
    description:
      'Die <b>2-Zimmer-Wohnung</b> befindet sich im <b>Erdgeschoss</b> und verfügt über einen <b>großzügigen Wohn-/Ess-/Kochbereich</b>, 1 Schlafzimmer, Badezimmer, WC und einen Vorraum. Zusätzlich bietet eine <b>Terrasse (10 m²)</b> mit der <b>zugeordneten Grundstücksfläche (29 m²)</b> Platz für Ihren individuellen Freiraum und lädt zum Verweilen ein Weiters verfügt die Wohnung über ein <b>Kellerabteil</b>, welches zusätzlichen Stauraum bietet, und auch ein <b>überdachter PKW-Abstellplatz</b> ist bereits in der Miete inkludiert. <br><br>Bei dieser Wohnung haben Sie die <b>Wahl zwischen</b> reiner <b>Miete</b>  (ohne Kaufoption) <b>oder Miete mit Kaufoption</b>.<br><br><b>Bei der Variante "Reine Miete" fallen die folgenden Kosten an:</b><br><br> \t\t\t\t\t     - Monatliche Miete in EUR: 637,00<br><br> \t\t\t\t\t     - Kaution in EUR: 2.000,00<br><br><b>Bei der Variante "Miete mit Kaufoption" fallen die folgenden Kosten an:</b><br><br> \t\t\t\t\t     - Monatliche Miete in EUR:...' +
      "\n" +
      "<ul><li>Terrassenfläche: 10 m²</li><li>Fläche Balkon/Terrassen: 10 m²</li><li>Keller: vorhanden</li></ul>\n" +
      "\n" +
      "<ul><li>Gartenfläche: 29 m²</li></ul>\n" +
      "\n" +
      "<ul><li>Wohnungsnummer: 339/1</li><li>Anzahl Stellplätze: 1</li><li>Energiepass HWB: 43 kWh/m²/Jahr</li><li>Verfügbar ab: 01.10.2024</li><li>Baujahr: 2022</li></ul>\n" +
      "\n" +
      "<ul><li>Heizkosten enthalten</li><li>Grundstücksanzahlung: 8.223,00 Eur</li><li>Kaution: 2000 Eur </li><li>Provisionsfrei</li></ul>",
    images: [
      "https://cache.willhaben.at/mmo/7/187/785/2517_505533888.jpg",
      "https://cache.willhaben.at/mmo/7/187/785/2517_-1264850975.jpg",
    ],
    propertyType: "apartment",
    address: {
      street: "St. Margarethen 339/1",
      postalCode: "8321",
      postalName: "St. Margarethen an der Raab",
      city: "Weiz",
      state: "Steiermark",
      country: "Österreich",
      countryCode: "AT",
    },
    coordinates: { latitude: null, longitude: null },
    monetaryDetails: {
      purchasingPrice: null,
      previousPurchasingPrice: null,
      purchasingPricePerM2: null,
      rent: 596,
      previousRent: null,
      rentPerM2: 11.617933723196881,
      currencyCode: "EUR",
      isCommissionFree: false,
      estMonthlyOperatingCosts: null,
    },
    features: {
      livingArea: 51.3,
      plotArea: 29,
      yearBuilt: null,
      bedrooms: 2,
      bathrooms: null,
      floor: 0,
      hasGarage: false,
      hasCarport: false,
      hasParkingSpace: false,
      hasBalcony: false,
      hasTerrace: true,
      hasGarden: true,
      hasLoggia: false,
      hasPool: null,
      hasStorageRoom: false,
      isBarrierFree: false,
      hasBuiltInKitchen: false,
      hasElevator: false,
      hasBasementCompartment: true,
      hasAirConditioning: null,
    },
    contactDetails: { name: null, phone: null, email: null },
    snapshotDate: "2024-06-28T07:21:11.499Z",
    scrapedFrom:
      "https://www.willhaben.at/iad/immobilien/d/mietwohnungen/steiermark/weiz/provisionsfrei-st-margarethen-an-der-raab-bau-8-gefoerderte-miete-oder-gefoerderte-miete-mit-kaufoption-2-zimmer-1877852517",
    publishedAt: "2024-06-28T07:57:00+0200",
    updatedAt: "2024-06-28T08:00:00+0200",
  } satisfies RealEstateListing;

  return overrides
    ? merge(fakeRealEstateListing, overrides)
    : fakeRealEstateListing;
}
