import { IconProp } from "@fortawesome/fontawesome-svg-core";

const mapWetherCodeToIconProps: Record<number, IconProp> = {
  113: 'sun',
  116: 'cloud-sun',
  119: 'cloud',
  122: 'cloud',
  143: 'cloud',
  248: 'cloud',
  260: 'cloud',
  263: 'cloud-rain',
  266: 'cloud-rain',
  176: 'cloud-rain',
  293: 'cloud-rain',
  296: 'cloud-rain',
  299: 'cloud-rain',
  302: 'cloud-rain',
  305: 'cloud-rain',
  308: 'cloud-rain',
  311: 'snowflake',
  179: 'snowflake',
  182: 'snowflake',
  185: 'snowflake',
  218: 'snowflake',
  284: 'snowflake',
  227: 'snowflake',
  230: 'snowflake',
  200: 'thunderstorm'
}

function getIconFromWetherCode(wetherCode: number): IconProp {
  return mapWetherCodeToIconProps[wetherCode] ?? 'sun'
}

export { getIconFromWetherCode }