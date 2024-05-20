import { WetherCondition } from "./wetherCondition";
import { WetherConfiguration } from "./wetherConfiguration";
import { WetherLocation } from "./wetherLocation";

interface WetherInformation {
  location: WetherLocation
  condition:  WetherCondition
  configuration: WetherConfiguration
}

export type { WetherInformation }