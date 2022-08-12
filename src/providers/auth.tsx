import { useState } from "react";
import { Navigate } from "react-router";

const AuthProvider: React.FC<any> = ({ children }) => {
   const [isAuthenticated] = useState(false);

   /**
    * This should actually be a react context api setup with a provider
    * Check if there is a token in the cookie
    * if not token redirect to sigin page
    *
    * after signin redirect the user back to the page where they originally wanted to visit
    */

   if (!isAuthenticated) return <Navigate to="/signin" replace />;

   return children;
};

export default AuthProvider;
