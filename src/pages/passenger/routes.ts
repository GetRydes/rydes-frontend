import Signin from "./signin";
import Register from "./register";
import Ride from "./ride";

export const passengerRoutes = [
   {
      name: "ride",
      path: "/ride",
      Component: Ride,
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
];
