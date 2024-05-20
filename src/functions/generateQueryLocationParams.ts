import { WETHER_API_KEY } from "../API/config";
import { WetherLocationInputType } from "../DTO";
import { UserPreferencesUnitType } from "../reducer/userPreferencesReducerType";

interface Props {
  location: WetherLocationInputType
  unit: UserPreferencesUnitType
}

function generateWetherQueryParams(props: Props) {
  const { location, unit } = props
  const defaultParams = {
    access_key: WETHER_API_KEY,
    unit: unit === 'imperial' ? 'f' : 'm'
  }
  if (typeof location === "string") {
    return new URLSearchParams({ query: location, ...defaultParams });
  }
  return new URLSearchParams({ query: location.join(','), ...defaultParams });
}

export { generateWetherQueryParams }