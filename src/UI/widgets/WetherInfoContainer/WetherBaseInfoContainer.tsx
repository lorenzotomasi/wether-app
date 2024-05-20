import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styleClasses } from "../../../constants";
import { WetherInformation } from "../../../model";
import { getIconFromWetherCode } from "../../../functions/getIconFromWetherCode";
import { useMemo } from "react";

interface Props {
  wetherInfo: WetherInformation;
}

const WetherBaseInfoContainer = (props: Props) => {
  const { wetherInfo } = props;
  const { condition, location, configuration } = wetherInfo;

  const temperatureFormatter = useMemo(() => {
    return new Intl.NumberFormat("en", {
      unit: configuration.unit === "fahrenheit" ? "fahrenheit" : "celsius",
      unitDisplay: 'narrow',
      style: 'unit',
    });
  }, [configuration.unit]);
  const windSpeedFormatter = useMemo(() => {
    return new Intl.NumberFormat("en", {
      unit: "kilometer-per-second",
      unitDisplay: 'narrow',
      style: 'unit',
    });
  }, []);
  const degreeFormatter = useMemo(() => {
    return new Intl.NumberFormat("en", {
      unit: "degree",
      unitDisplay: 'narrow',
      style: 'unit',
    });
  }, []);
  function renderTemperature() {
    return (
      <div className={styleClasses.wetherInformationTemperature}>
        <FontAwesomeIcon icon={"temperature-three-quarters"} size={"2x"} />
        {temperatureFormatter.format(condition.temperature)}
      </div>
    );
  }

  function renderWind() {
    return (
      <div className={styleClasses.wetherInformationWind}>
        <div className={styleClasses.wetherInformationWindSpeed}>
          <FontAwesomeIcon icon={"wind"} size={"lg"} />
          <p>{windSpeedFormatter.format(condition.windSpeed)}</p>
        </div>
        <div className={styleClasses.wetherInformationWindDirection}>
          <FontAwesomeIcon icon={"compass"} size={"lg"} />
          <p>{`${degreeFormatter.format(condition.windDegree)} ${
            condition.windDirection
          }`}</p>
        </div>
      </div>
    );
  }

  function renderCondition() {
    return (
      <FontAwesomeIcon
        icon={getIconFromWetherCode(condition.weatherCode)}
        size={"3x"}
      />
    );
  }

  function renderLocation() {
    return location.name;
  }

  return (
    <div className={styleClasses.wetherInformationCard}>
      <div className={styleClasses.wetherInformationCardPrimaryContent}>
        {renderLocation()}
        {renderCondition()}
      </div>
      <div className={styleClasses.wetherInformationCardSecondaryContent}>
        {renderTemperature()}
        {renderWind()}
      </div>
    </div>
  );
};

export default WetherBaseInfoContainer;
