import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styleClasses } from "../../../constants";

const FetchError = () => {

  return (
    <div className={styleClasses.wetherInformationCard}>
      At the moment it is not possible to find information for this location
      <FontAwesomeIcon icon={"bug"} />
    </div>
  );
}

export default FetchError