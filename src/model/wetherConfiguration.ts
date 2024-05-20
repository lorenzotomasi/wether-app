interface WetherConfiguration {
  type: WetherConfigurationType
  query: string
  language: string
  unit: WetherConfigurationUnit
}

type WetherConfigurationType = 'city' | 'latLon' | 'ip' | 'zipcode'
type WetherConfigurationUnit = 'metric' | 'scientific' | 'fahrenheit'

export type { WetherConfiguration, WetherConfigurationType, WetherConfigurationUnit }