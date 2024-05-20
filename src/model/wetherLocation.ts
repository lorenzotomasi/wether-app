interface WetherLocation {
  name: string
  country: string
  region: string
  lat: number
  lon: number
  timezoneId: string
  localTime: Date
  localTimeEpoch: number
  utcOffset: string
}

export type { WetherLocation }