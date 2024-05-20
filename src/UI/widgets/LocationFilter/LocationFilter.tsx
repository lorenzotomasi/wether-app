import { useCallback, useState } from "react";
import {
  useUserPreferencesState,
} from "../../../services/store";
import { styleClasses } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WetherLocationInputType } from "../../../DTO";

interface Props {
  onSearchNewLocation: (value: string) => void;
}

const LocationFilter = (props: Props) => {
  const [locationFilterState, setLocationFilterState] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const state = useUserPreferencesState();

  const { onSearchNewLocation, onChangeUnit } = props;

  const handleLocationFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setLocationFilterState(e.target.value);
    },
    []
  );

  const handleSearchNewLocation = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      onSearchNewLocation(locationFilterState);
    },
    [locationFilterState]
  );

  function handleOnFocus() {
    setShowSuggestions((prev) => !prev);
  }

  function renderLocationFilterInput() {
    return (
      <input
        className={styleClasses.wetherLocationFilterInput}
        onChange={handleLocationFilterChange}
        value={locationFilterState}
        onFocus={handleOnFocus}
        onBlur={handleOnFocus}
      />
    );
  }

  function handleOnClickSuggestion(
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    location: WetherLocationInputType
  ) {
    console.log({ location })
    e.stopPropagation();
    onSearchNewLocation(typeof location === 'string' ? location : location.join(','))
  }

  function renderSingleLocation(location: WetherLocationInputType) {
    if (typeof location === "string") {
      return <p onClick={(e) => handleOnClickSuggestion(e,location)}>{location}</p>;
    }
    if (Array.isArray(location)) {
      return (
        <p onClick={(e) => handleOnClickSuggestion(e,location)}>
          {location.join(",")}
        </p>
      );
    }
    return <></>;
  }

  function renderSuggestions() {
    if (state.lastLocationSearched.length === 0 || !showSuggestions) {
      return <></>;
    }
    return (
      <div className={styleClasses.locationSuggestions}>
        {state?.lastLocationSearched?.map(renderSingleLocation)}
      </div>
    );
  }

  function renderSearchButton() {
    return (
      <button onClick={handleSearchNewLocation}>
        <FontAwesomeIcon icon={"search"} />
      </button>
    );
  }

  return (
    <div className={styleClasses.wetherLocationFilter}>
      {renderSuggestions()}
      {renderLocationFilterInput()}
      {renderSearchButton()}
    </div>
  );
};

export default LocationFilter;
