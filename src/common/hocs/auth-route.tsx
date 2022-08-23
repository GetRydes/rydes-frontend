import React from "react";
import { Navigate } from "react-router";
import { isLoggedIn } from "../../utils/helper";

const AuthenticationRoute: React.FC = ({ children }) => {
   // depending on the whether the person is loggged in as a driver or
   // passenger will determine where the person is redirected to

   if (isLoggedIn()) return <Navigate to="/passenger/ride" />;

   return <>{children}</>;
};

export default AuthenticationRoute;
