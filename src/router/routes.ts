import { Home, Passenger, Register, Signin } from "../pages";
import { PASSENGER_ROUTE_PREFIX } from "../utils/constants";

const Routes = [
   {
      name: "passenger",
      path: `${PASSENGER_ROUTE_PREFIX}/*`,
      Component: Passenger,
      isProtected: true,
   },
   {
      name: "register",
      path: "/register",
      Component: Register,
      isAuthRoute: true,
   },
   {
      name: "signin",
      path: "/signin",
      Component: Signin,
      isAuthRoute: true,
   },
   {
      name: "home",
      path: "/",
      Component: Home,
   },
];

export default Routes;
