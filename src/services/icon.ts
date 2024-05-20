import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloud as fasCloud } from "@fortawesome/free-solid-svg-icons/faCloud";
import { faWind as fasWind } from "@fortawesome/free-solid-svg-icons/faWind";
import { faSun as fasSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faCloudBolt as fasCloudBolt } from "@fortawesome/free-solid-svg-icons/faCloudBolt";
import { faCloudSun as fasCloudSun } from "@fortawesome/free-solid-svg-icons/faCloudSun";
import { faCloudRain as fasCloudRain } from "@fortawesome/free-solid-svg-icons/faCloudRain";
import { faSnowflake as fasSnowflake } from "@fortawesome/free-solid-svg-icons/faSnowflake";
import { faThunderstorm as fasThunderstorm } from "@fortawesome/free-solid-svg-icons/faThunderstorm";
import { faTemperatureThreeQuarters as fasTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons/faTemperatureThreeQuarters";
import { faCompass as fasCompass } from "@fortawesome/free-solid-svg-icons/faCompass";
import { faSearch as fasSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faGauge as fasGauge } from '@fortawesome/free-solid-svg-icons/faGauge'
import { faUmbrella as fasUmbrella } from '@fortawesome/free-solid-svg-icons/faUmbrella'
import { faGear as fasGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faBug as fasBug } from "@fortawesome/free-solid-svg-icons/faBug";

function initIcons() {
  library.add([
    fasWind,
    fasCloud,
    fasCloudBolt,
    fasSun,
    fasTemperatureThreeQuarters,
    fasCompass,
    fasSearch,
    fasCloudSun,
    fasCloudRain,
    fasSnowflake,
    fasThunderstorm,
    fasGauge,
    fasUmbrella,
    fasGear,
    fasBug
  ]);
}

export { initIcons };
