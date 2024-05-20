import { PersistorAction } from "redux-persist";
import { UserPreferencesReducerAction } from "./usePreferencesReducerAction";
import { UserPreferencesReducerType } from "./userPreferencesReducerType";
import { CombineReducerType } from "../services/store";

const initUserPreferencesReducer: UserPreferencesReducerType = {
  lastLocationSearched: [],
  unitPreference: "metric",
  numberOfLocationToStore: 5,
};

function userPreferencesReducer(
  state: UserPreferencesReducerType = initUserPreferencesReducer,
  action: UserPreferencesReducerAction | PersistorAction
): UserPreferencesReducerType {
  switch (action.type) {
    case "USER_PREFERENCES_ADDED_LOCATION": {
      const newState = { ...state };
      if (
        newState.lastLocationSearched.find((e) => {
          if (typeof e === "string") {
            return e === action.action.newLocation;
          }
          return e[0] === action.action.newLocation[0] && e[1] === action.action.newLocation[1]
        })
      ) {
        return newState
      }
        newState.lastLocationSearched = [
          action.action.newLocation,
          ...newState.lastLocationSearched,
        ].slice(0, newState.numberOfLocationToStore);
      return newState;
    }
    case "USER_PREFERENCES_UNIT_CHANGED": {
      const newState = { ...state };
      newState.unitPreference = action.action.unit;
      return newState;
    }
    case "persist/REHYDRATE": {
      const newState = (action.payload as unknown as CombineReducerType)
        .userPreferencesReducer;
      if (!newState) {
        return {
          ...initUserPreferencesReducer,
        };
      }
      return {
        lastLocationSearched:
          newState.lastLocationSearched ??
          initUserPreferencesReducer.lastLocationSearched,
        numberOfLocationToStore:
          newState.numberOfLocationToStore ??
          initUserPreferencesReducer.numberOfLocationToStore,
        unitPreference:
          newState.unitPreference ?? initUserPreferencesReducer.unitPreference,
      };
    }
    default:
      return { ...state };
  }
}

export { userPreferencesReducer };
