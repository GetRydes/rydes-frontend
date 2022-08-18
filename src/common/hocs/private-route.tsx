import { Navigate } from "react-router";
import { isLoggedIn } from "../../utils/helper";

const PrivateRoute: React.FC = ({ children }) => {
   /**
    * This should actually be a react context api setup with a provider
    * Check if there is a token in the cookie
    * if not token redirect to sigin page
    *
    * after signin redirect the user back to the page where they originally wanted to visit
    */

   if (!isLoggedIn()) return <Navigate to="/signin" replace />;

   return <>{children}</>;
};

export default PrivateRoute;
