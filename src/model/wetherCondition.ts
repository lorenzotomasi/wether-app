interface WetherCondition {
  conditionTime: string
  temperature: number
  weatherCode: number
  weatherDescriptions: string[]
  windSpeed: number
  windDegree: number
  windDirection: string
  pressure: number
  precipitation: number
  humidity: number
  cloudCover: number
  feelsLike: number
  uvIndex: number
  visibility: number
}

export type { WetherCondition }
