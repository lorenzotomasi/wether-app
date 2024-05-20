import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styleClasses } from "../../../constants";
import { WetherInformation } from "../../../model";
import { useMemo } from "react";

interface Props {
  wetherInfo: WetherInformation;
}

const WetherAdditionInfoContainer = (props: Props) => {
  const { wetherInfo } = props;
  const { condition } = wetherInfo;

  const milliliterFormatter = useMemo(() => {
    return new Intl.NumberFormat("en", {
      unit: "millimeter",
      unitDisplay: "narrow",
      style: "unit",
    });
  }, []);


  function renderHumidity() {
    return (
      <div className={styleClasses.wetherInformationHumidity}>
        <FontAwesomeIcon icon={"temperature-three-quarters"} size={"2x"} />
        {condition.humidity} %
      </div>
    );
  }

  function renderPressure() {
    return (
      <div className={styleClasses.wetherInformationPressure}>
        <FontAwesomeIcon icon={"gauge"} size={"lg"} />
        {condition.pressure} mBar
      </div>
    );
  }

  function renderPrecipitation() {
    return (
      <div className={styleClasses.wetherInformationPrecipitation}>
        <FontAwesomeIcon icon={"umbrella"} size={"3x"} />
        {milliliterFormatter.format(condition.precipitation)}
      </div>
    );
  }

  return (
    <div className={styleClasses.wetherInformationCard}>
      <div className={styleClasses.wetherInformationCardPrimaryContent}>
        {renderPrecipitation()}
      </div>
      <div className={styleClasses.wetherInformationCardSecondaryContent}>
        {renderHumidity()}
        {renderPressure()}
      </div>
    </div>
  );
};

export default WetherAdditionInfoContainer;
