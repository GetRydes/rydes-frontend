import { Driver, Home, Passenger } from "../pages";
import { DRIVER_ROUTE_PREFIX, PASSENGER_ROUTE_PREFIX } from "../utils/constants";

const Routes = [
   {
      name: "passenger",
      path: `${PASSENGER_ROUTE_PREFIX}/*`,
      Component: Passenger,
      isAuthRoute: false,
   },
   {
      name: "driver",
      path: `${DRIVER_ROUTE_PREFIX}/*`,
      Component: Driver,
   },
   {
      name: "home",
      path: "/",
      Component: Home,
      isProtected: false,
      isAuthRoute: false,
   },
];

export default Routes;
