import { Signin } from "..";
import Register from "../passenger/register";
import Drive from "./drive";

export const driverRoutes = [
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
      name: "drive",
      path: "/drive",
      Component: Drive,
      isProtected: true,
   },
];
