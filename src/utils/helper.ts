import Cookies from "universal-cookie";
import {
   DRIVER_ACCESS_TOKEN,
   PASSENGER_ACCESS_TOKEN,
   RYDES_DRIVER_USER_TYPE,
   RYDES_PASSENGER_USER_TYPE,
} from "./constants";

export const getActivePosition = (callback: any) => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            callback({ lat, lng }, true);
         },
         (error) => {
            callback(error, false);
         },
      );
   }
};

export const isLoggedIn = (type?: "PASSENGER" | "DRIVER"): boolean => {
   const cookie = new Cookies();

   switch (type) {
      case RYDES_PASSENGER_USER_TYPE:
         return !!cookie.get(PASSENGER_ACCESS_TOKEN);
      case RYDES_DRIVER_USER_TYPE:
         return !!cookie.get(DRIVER_ACCESS_TOKEN);
      default:
         return !!cookie.get(PASSENGER_ACCESS_TOKEN) || !!cookie.get(DRIVER_ACCESS_TOKEN);
   }
};

export const capitalizeFirstLetter = (string: string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
};
