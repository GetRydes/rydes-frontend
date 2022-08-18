import Cookies, { CookieSetOptions } from "universal-cookie";
import {
   DRIVER_ACCESS_TOKEN,
   DRIVER_REFRESH_TOKEN,
   PASSENGER_ACCESS_TOKEN,
   PASSENGER_REFRESH_TOKEN,
} from "./constants";

const getLocalAccessToken = (isPassenger: boolean = true) => {
   const accessToken = new Cookies().get(
      isPassenger ? PASSENGER_ACCESS_TOKEN : DRIVER_ACCESS_TOKEN,
   );
   return accessToken;
};

const getLocalRefreshToken = (isPassenger: boolean = true) => {
   const refreshToken = new Cookies().get(
      isPassenger ? PASSENGER_REFRESH_TOKEN : DRIVER_REFRESH_TOKEN,
   );
   return refreshToken;
};

const updateLocalToken = (key: string, value: string, options?: CookieSetOptions) => {
   const cookies = new Cookies();
   cookies.set(key, value, options);
};

const removeLocalToken = (key: string) => {
   new Cookies().remove(key);
};

const TokenService = Object.freeze({
   getLocalAccessToken,
   getLocalRefreshToken,
   updateLocalToken,
   removeLocalToken,
});

export default TokenService;
