import { Fragment } from "react";
import { Navigate } from "react-router";
import { isLoggedIn } from "../../utils/helper";

export interface PrivateRouteProps {
   ProtectionComponent?: React.FC;
   userType?: "PASSENGER" | "DRIVER";
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
   children,
   ProtectionComponent = Fragment,
   userType = "PASSENGER",
}) => {
   /**
    * This should actually be a react context api setup with a provider
    * Check if there is a token in the cookie
    * if not token redirect to sigin page
    *
    * after signin redirect the user back to the page where they originally wanted to visit
    */

   if (!isLoggedIn(userType)) return <Navigate to={`/${userType.toLowerCase()}/signin`} replace />;

   return <ProtectionComponent>{children}</ProtectionComponent>;
};

export default PrivateRoute;
