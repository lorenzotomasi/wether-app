import {
  useUserPreferencesDispatch,
  useUserPreferencesState,
} from "../../services/store";
import LocationFilter from "../widgets/LocationFilter/LocationFilter";
import WetherBaseInfoContainer from "../widgets/WetherInfoContainer/WetherBaseInfoContainer";
import { WetherConfiguration, WetherInformation } from "../../model";
import { FETCH_FROM_IP, styleClasses } from "../../constants";
import { useFetchHook } from "../../hooks/useFetchHook";
import { getCurrentWether } from "../../API/current";
import { WetherLocationInputType } from "../../DTO";
import { toggleTheme } from "../../functions/handleChangeBackgroundColor";
import { useCallback, useEffect } from "react";
import WetherAdditionInfoContainer from "../widgets/WetherInfoContainer/WetherAdditionInformationContainer";
import UserSettings from "../widgets/UserSettings/UserSetting";
import { UserPreferencesUnitType } from "../../reducer/userPreferencesReducerType";
import FetchError from "../widgets/ErrorBoundary/FetchError";

const MainWetherPageView = () => {
  const dispatch = useUserPreferencesDispatch();
  const [{ data, error }, retryCall] = useFetchHook<
    WetherInformation,
    [WetherLocationInputType,UserPreferencesUnitType]
  >({
    promise: getCurrentWether,
    params: [FETCH_FROM_IP],
  });

  const state = useUserPreferencesState();

  const handleReloadNewLocation = useCallback((newLocation: string) => {
    retryCall(newLocation,state.unitPreference);
    dispatch({
      type: "USER_PREFERENCES_ADDED_LOCATION",
      action: { newLocation: newLocation },
    });
  }, [state.unitPreference])

  const handleNewUnit = useCallback((newUnit: UserPreferencesUnitType) => {
    retryCall(data?.configuration.query ?? FETCH_FROM_IP,newUnit);
  },[data?.configuration])

  useEffect(() => {
    if (data) {
      toggleTheme(data.condition.weatherCode);
    }
  }, [data]);

  // useEffect(() => {
  //   if(!data) {
  //     return
  //   }
  //   if(state.unitPreference !==  data.configuration.unit) {
  //     retryCall(data.configuration.query,state.unitPreference)
  //   }
  // }, [state.unitPreference,data, retryCall]);

  function renderContent(
    wetherInformation: WetherInformation | undefined,
    e: unknown
  ) {
    if (e) {
      return <></>;
    }
    if (wetherInformation) {
      return (
        <div className={styleClasses.wetherInformationCardContainer}>
          <WetherBaseInfoContainer wetherInfo={wetherInformation} />
          <WetherAdditionInfoContainer wetherInfo={wetherInformation} />
        </div>
      );
    }
    return <></>;
  }

  function renderFilterAndSetting(config: WetherConfiguration | undefined) {
    return (
      <div className={styleClasses.mainContentContainerHeader}>
        <LocationFilter onSearchNewLocation={handleReloadNewLocation} />
        {config && <UserSettings onChangeUnit={handleNewUnit} wetherConfig={config} />}
      </div>
    );
  }

  function renderError(error: unknown) {
    if(!error) {
      return <></>
    }
    return <div className={styleClasses.wetherInformationCardContainer}>
      <FetchError />
    </div>
  }

  return (
    <div
      className={`${styleClasses.mainContentContainer} ${styleClasses.contentBackground}`}
    >
      {renderFilterAndSetting(data?.configuration)}
      {renderContent(data, error)}
      {renderError(error)}
    </div>
  );
};

export default MainWetherPageView;
