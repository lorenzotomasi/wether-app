import { WetherRequestBE } from "../DTO";
import {
  WetherConfiguration,
  WetherConfigurationType,
  WetherConfigurationUnit,
} from "../model";

const wetherConfigTypeMapper: Record<string, WetherConfigurationType> = {
  City: "city",
  IP: "ip",
  LatLon: "latLon",
  Zipcode: "zipcode",
};

const wetherUnitTypeMapper: Record<string, WetherConfigurationUnit> = {
  f: "fahrenheit",
  m: "metric",
  s: "scientific",
};

function wetherRequestBEToWetherConfiguration(
  config: WetherRequestBE
): WetherConfiguration {
  try {
    return {
      language: config.language,
      query: config.query,
      type: wetherConfigTypeMapper[config.type] ?? "city",
      unit: wetherUnitTypeMapper[config.unit] ?? "metric",
    };
  } catch (error) {
    throw new Error(`error on wetherRequestBEToWetherConfiguration, ${error}`);
  }
}

export { wetherRequestBEToWetherConfiguration };
