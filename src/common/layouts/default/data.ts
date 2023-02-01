import { DRIVER_ROUTE_PREFIX, PASSENGER_ROUTE_PREFIX } from "../../../utils/constants";

export const navLinks = [
   {
      path: `${PASSENGER_ROUTE_PREFIX}/ride`,
      name: "Get a ride",
   },
   {
      path: `${DRIVER_ROUTE_PREFIX}/register`,
      name: "Become a driver",
   },
];
