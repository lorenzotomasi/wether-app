import { UnknownAction } from "redux";
import { WetherLocationInputType } from "../DTO";
import { UserPreferencesUnitType } from "./userPreferencesReducerType";

interface UserPreferencesUnitChanged extends UnknownAction {
  type: "USER_PREFERENCES_UNIT_CHANGED";
  action: { unit: UserPreferencesUnitType };
}

interface UserPreferencesSearchLocationAdded extends UnknownAction {
  type: "USER_PREFERENCES_ADDED_LOCATION";
  action: { newLocation: WetherLocationInputType };
}


type UserPreferencesReducerAction = UserPreferencesUnitChanged | UserPreferencesSearchLocationAdded

export type { UserPreferencesReducerAction }