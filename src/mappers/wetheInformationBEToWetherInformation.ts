import { WetherInformationBE } from "../DTO";
import { WetherInformation } from "../model";
import { wetherCurrentBEToWetherCondition } from "./wetherConditionBEToWetherCondition";
import { wetherLocationBEToWetherLocation } from "./wetherLocationBEToWetherLocation";
import { wetherRequestBEToWetherConfiguration } from "./wetherRequestBEToWetherConfiguration";

function wetherInformationBEToWetherInformation(
  wetherInfo: WetherInformationBE
): WetherInformation {
  try {
    return {
      condition: wetherCurrentBEToWetherCondition(wetherInfo.current),
      configuration: wetherRequestBEToWetherConfiguration(wetherInfo.request),
      location: wetherLocationBEToWetherLocation(wetherInfo.location),
    };
  } catch (error) {
    throw new Error(
      `Error on wetherInformationBEToWetherInformation, ${error}`
    );
  }
}

export { wetherInformationBEToWetherInformation };
