import { WetherCurrentBE } from "../DTO";
import { WetherCondition } from "../model";

function wetherCurrentBEToWetherCondition(wetherCondition: WetherCurrentBE): WetherCondition {
  try {
    return {
      cloudCover: wetherCondition.cloudcover,
      conditionTime: wetherCondition.observation_time,
      feelsLike: wetherCondition.feelslike,
      humidity: wetherCondition.humidity,
      precipitation: wetherCondition.precip,
      pressure: wetherCondition.pressure,
      temperature: wetherCondition.temperature,
      uvIndex: wetherCondition.uv_index,
      visibility: wetherCondition.visibility,
      weatherCode: wetherCondition.weather_code,
      weatherDescriptions: wetherCondition.weather_descriptions,
      windDegree: wetherCondition.wind_degree,
      windDirection: wetherCondition.wind_dir,
      windSpeed: wetherCondition.wind_speed
    }
  } catch (error) {
    throw new Error(`error on wetherCurrentBEToWetherCondition, ${error}`);
  }
}

export { wetherCurrentBEToWetherCondition }