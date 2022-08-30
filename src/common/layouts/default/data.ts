import { DRIVER_ROUTE_PREFIX, PASSENGER_ROUTE_PREFIX } from "../../../utils/constants";

export const navLinks = [
   {
      path: `${PASSENGER_ROUTE_PREFIX}/ride`,
      name: "Get a ride",
   },
   {
      path: `${DRIVER_ROUTE_PREFIX}/drive`,
      name: "Become a driver",
   },
   {
      path: "/about",
      name: "About",
   },
];
