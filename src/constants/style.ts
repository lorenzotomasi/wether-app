const styleClasses = {
  mainContentContainer: "main-content-container",
  mainContentContainerHeader: "main-content-container-header",
  contentBackground: "content-background",
  userSettingContainer: "user-setting-container",
  userSettingContent: 'user-setting-content',
  wetherInformationCardContainer: "wether-information-card-container",
  wetherInformationCard: "wether-information-card",
  wetherInformationCardPrimaryContent:
    "wether-information-card__primary-content",
  wetherInformationCardSecondaryContent:
    "wether-information-card__secondary-content",
  wetherInformationTemperature: "wether-information-temperature",
  wetherInformationPressure: "wether-information-pressure",
  wetherInformationPrecipitation: "wether-information-precipitation",
  wetherInformationHumidity: "wether-information-humidity",
  wetherInformationWind: "wether-information-wind",
  wetherInformationWindDirection: "wether-information-wind-direction",
  wetherInformationWindSpeed: "wether-information-wind-speed",
  wetherLocationFilter: "wether-location-filter",
  wetherLocationFilterInput: "wether-location-filter-input",
  locationSuggestions: "wether-location-filter-suggestion",
  error: "wether-error-reload"
} as const;

const cssVariable = {
  generateVariable: (
    key: string,
    semantic: "primary" | "secondary" | "tertiary"
  ) => `--${key}-day--${semantic}`,
  cloudy: "cloudy",
  sunny: "sunny-clear",
  thunderStorm: "thunder-storm",
  snowy: "snowy",
  rainy: "rainy",
  current: "active-condition",
} as const;

export { styleClasses, cssVariable };
