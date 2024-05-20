import { WetherInformationBE, WetherLocationInputType } from "../../DTO";
import { generateWetherQueryParams } from "../../functions";
import { wetherInformationBEToWetherInformation } from "../../mappers/wetheInformationBEToWetherInformation";
import { UserPreferencesUnitType } from "../../reducer/userPreferencesReducerType";
import { WETHER_API_BASE_URL } from "../config";

function getCurrentWether(location: WetherLocationInputType, unit: UserPreferencesUnitType) {
  return fetch(
  `${WETHER_API_BASE_URL}/current?${generateWetherQueryParams({location, unit})}`,
    )
    .then((res) => {
      if(!res.ok) {
        throw new Error(`Error on getCurrentWether, ${res.statusText}`);
      }
      return res.json().then((r: WetherInformationBE) => wetherInformationBEToWetherInformation(r))
    })
    // .catch(() =>
    //   wetherInformationBEToWetherInformation({
    //     "request": {
    //         "type": "City",
    //         "query": "New York, United States of America",
    //         "language": "en",
    //         "unit": "m"
    //     },
    //     "location": {
    //         "name": "New York",
    //         "country": "United States of America",
    //         "region": "New York",
    //         "lat": "40.714",
    //         "lon": "-74.006",
    //         "timezone_id": "America/New_York",
    //         "localtime": "2024-05-19 14:18",
    //         "localtime_epoch": 1716128280,
    //         "utc_offset": "-4.0"
    //     },
    //     "current": {
    //         "observation_time": "06:18 PM",
    //         "temperature": 22,
    //         "weather_code": 308,
    //         "weather_descriptions": [
    //             "Partly cloudy"
    //         ],
    //         "wind_speed": 17,
    //         "wind_degree": 50,
    //         "wind_dir": "NE",
    //         "pressure": 1015,
    //         "precip": 0,
    //         "humidity": 53,
    //         "cloudcover": 75,
    //         "feelslike": 25,
    //         "uv_index": 5,
    //         "visibility": 16,
    //     }
    // })
    // );
}

export { getCurrentWether };
