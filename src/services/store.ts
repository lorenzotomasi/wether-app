import { useSelector } from "react-redux";
import { combineReducers } from "redux";
import { userPreferencesReducer } from "../reducer/userPreferencesReducer";
import { configureStore } from "@reduxjs/toolkit";
import { UserPreferencesReducerType } from "../reducer/userPreferencesReducerType";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch } from "react-redux";

export interface CombineReducerType {
  userPreferencesReducer: UserPreferencesReducerType;
}

const userPreferencesReducerCombine = combineReducers({
  userPreferencesReducer: userPreferencesReducer,
});

const persistor = persistReducer<CombineReducerType>(
  {
    key: "userPreferences",
    storage,
    whitelist: ["userPreferencesReducer"],
  },
  userPreferencesReducerCombine
);

const configuredStore = configureStore({
  reducer: persistor,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistedStore = persistStore(configuredStore);

const useUserPreferencesState = () => {
  return useSelector<CombineReducerType, UserPreferencesReducerType>(
    (state) => {
      return state.userPreferencesReducer;
    }
  );
};

const useUserPreferencesDispatch = () => {
  return useDispatch() as typeof configuredStore.dispatch;
};
export {
  configuredStore,
  useUserPreferencesState,
  persistedStore,
  useUserPreferencesDispatch,
};
