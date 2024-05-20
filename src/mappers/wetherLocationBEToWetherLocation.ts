import { WetherLocationBE } from "../DTO";
import { WetherLocation } from "../model";

function wetherLocationBEToWetherLocation(
  wetherLocation: WetherLocationBE
): WetherLocation {
  try {
    return {
      country: wetherLocation.country,
      lat: parseFloat(wetherLocation.lat),
      localTime: new Date(wetherLocation.localtime),
      localTimeEpoch: wetherLocation.localtime_epoch,
      lon: parseFloat(wetherLocation.lon),
      name: wetherLocation.name,
      region: wetherLocation.region,
      timezoneId: wetherLocation.timezone_id,
      utcOffset: wetherLocation.utc_offset,
    };
  } catch (error) {
    throw new Error(`Error on wetherLocationBEToWetherLocation, ${error}`);
  }
}

export { wetherLocationBEToWetherLocation };
