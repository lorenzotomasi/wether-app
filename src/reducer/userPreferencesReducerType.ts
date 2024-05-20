import { WetherLocationInputType } from "../DTO";

type UserPreferencesUnitType = "metric" | "imperial";

interface UserPreferencesReducerType {
  lastLocationSearched: Array<WetherLocationInputType>;
  unitPreference: UserPreferencesUnitType;
  numberOfLocationToStore: number
}

export type { UserPreferencesReducerType, UserPreferencesUnitType };
