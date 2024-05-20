import { cssVariable } from "../constants/style";

function getComputedRootStyle() {
  const rootStyle = document.querySelector(":root")!;
  const computedStyle = getComputedStyle(rootStyle);
  return computedStyle;
}

const mapWetherCodeToCssKey: Record<number, string> = {
  113: cssVariable.sunny,
  116: cssVariable.sunny,
  119: cssVariable.cloudy,
  122: cssVariable.cloudy,
  143: cssVariable.cloudy,
  248: cssVariable.cloudy,
  260: cssVariable.cloudy,
  263: cssVariable.rainy,
  266: cssVariable.rainy,
  176: cssVariable.rainy,
  293: cssVariable.rainy,
  296: cssVariable.rainy,
  299: cssVariable.rainy,
  302: cssVariable.rainy,
  305: cssVariable.rainy,
  308: cssVariable.rainy,
  311: cssVariable.snowy,
  179: cssVariable.snowy,
  182: cssVariable.snowy,
  185: cssVariable.snowy,
  218: cssVariable.snowy,
  284: cssVariable.snowy,
  227: cssVariable.snowy,
  230: cssVariable.snowy,
  200: cssVariable.thunderStorm,
};

function toggleTheme(wetherCode: number) {
  const rootStyle = document.querySelector(":root");
  const computedStyle = getComputedRootStyle();
  const currentPrimaryKey = cssVariable.generateVariable(
    cssVariable.current,
    "primary"
  );
  const currentSecondaryKey = cssVariable.generateVariable(
    cssVariable.current,
    "secondary"
  );
  const currentTertiaryKey = cssVariable.generateVariable(
    cssVariable.current,
    "tertiary"
  );

  let primary: string = cssVariable.generateVariable(
    cssVariable.sunny,
    "primary"
  );
  let secondary: string = cssVariable.generateVariable(
    cssVariable.sunny,
    "secondary"
  );
  let tertiary: string = cssVariable.generateVariable(
    cssVariable.sunny,
    "tertiary"
  );

  if (
    computedStyle.getPropertyValue(currentPrimaryKey) ===
    computedStyle.getPropertyValue(primary)
  ) {
    primary = cssVariable.generateVariable(
      mapWetherCodeToCssKey[wetherCode] ?? cssVariable.sunny,
      "primary"
    );
    secondary = cssVariable.generateVariable(
      mapWetherCodeToCssKey[wetherCode] ?? cssVariable.sunny,
      "secondary"
    );
    tertiary = cssVariable.generateVariable(
      mapWetherCodeToCssKey[wetherCode] ?? cssVariable.sunny,
      "tertiary"
    );
  }
  
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(currentPrimaryKey, `var(${primary})`);
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(currentSecondaryKey, `var(${secondary})`);
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(currentTertiaryKey, `var(${tertiary})`);
}

export { getComputedRootStyle, toggleTheme };
