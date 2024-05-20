import { WetherCurrentBE } from "./wetherCurrentBE";
import { WetherLocationBE } from "./wetherLocationBE";
import { WetherRequestBE } from "./wetherRequestBE";

interface WetherInformationBE {
  request: WetherRequestBE
  location: WetherLocationBE
  current: WetherCurrentBE
}

export type { WetherInformationBE }