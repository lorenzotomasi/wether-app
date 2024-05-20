import { styleClasses } from "../../../constants";
import { useMemo } from "react";
import {
  useUserPreferencesDispatch,
  useUserPreferencesState,
} from "../../../services/store";
import { UserPreferencesUnitType } from "../../../reducer/userPreferencesReducerType";
import { WetherConfiguration } from "../../../model";

interface Props {
  onChangeUnit: (newUnit: UserPreferencesUnitType) => void
  wetherConfig: WetherConfiguration
}

const UserSettings = (props: Props) => {
  const { onChangeUnit, wetherConfig } = props
  const dispatch = useUserPreferencesDispatch();
  const state = useUserPreferencesState();

  const temperatureFormatter = useMemo(() => {
    return new Intl.NumberFormat("en", {
      unit: state.unitPreference === "imperial" ? "fahrenheit" : "celsius",
      unitDisplay: "short",
      style: "unit",
    })
      .formatToParts(0)
      .find((e) => e.type === "unit");
  }, [state.unitPreference]);

  function toggleUnit() {
    const newUnit = state.unitPreference === "metric" ? "imperial" : "metric"
    if(state.unitPreference !== wetherConfig.unit) {
      onChangeUnit(newUnit)
    }
    dispatch({
      type: "USER_PREFERENCES_UNIT_CHANGED",
      action: {
        unit: newUnit,
      },
    });
  }

  return (
    <div className={styleClasses.userSettingContainer}>
      <button onClick={toggleUnit}>{temperatureFormatter?.value}</button>
    </div>
  );
};

export default UserSettings;
