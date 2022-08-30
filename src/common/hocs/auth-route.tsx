import React from "react";
import { Navigate } from "react-router";
import { isLoggedIn } from "../../utils/helper";

interface AuthenticationRouteProps {
   userType?: "PASSENGER" | "DRIVER";
}

const AuthenticationRoute: React.FC<AuthenticationRouteProps> = ({
   children,
   userType = "PASSENGER",
}) => {
   // depending on the whether the person is loggged in as a driver or
   // passenger will determine where the person is redirected to

   if (isLoggedIn(userType)) return <Navigate to="/passenger/ride" />;

   return <>{children}</>;
};

export default AuthenticationRoute;
