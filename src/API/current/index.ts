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
}

export { getCurrentWether };
