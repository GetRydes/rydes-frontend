import { Home, Register, Ride, Signin } from "../pages";

const Routes = [
   {
      name: "ride",
      path: "/ride",
      Component: Ride,
      isProtected: false,
   },
   {
      name: "register",
      path: "/register",
      Component: Register,
   },
   {
      name: "signin",
      path: "/signin",
      Component: Signin,
   },
   {
      name: "home",
      path: "/",
      Component: Home,
   },
];

export default Routes;
