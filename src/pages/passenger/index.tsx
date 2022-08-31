import { Route, Routes } from "react-router-dom";
import AuthenticationRoute from "../../common/hocs/auth-route";
import PassengerProtectedRoute from "../../common/hocs/passenger-private-route";
import PrivateRoute from "../../common/hocs/private-route";
import PageNotFound from "../404/404";
import { passengerRoutes } from "./routes";

const PassengerPages = () => {
   return (
      <Routes>
         {passengerRoutes.map(({ Component, path, isAuthRoute, isProtected }, key) => {
            return isProtected ? (
               <Route
                  path={path}
                  element={
                     <PrivateRoute ProtectionComponent={PassengerProtectedRoute}>
                        <Component />
                     </PrivateRoute>
                  }
                  key={key}
               />
            ) : isAuthRoute ? (
               <Route
                  path={path}
                  element={
                     <AuthenticationRoute>
                        <Component />
                     </AuthenticationRoute>
                  }
                  key={key}
               />
            ) : (
               <Route path={path} element={<Component />} key={key} />
            );
         })}
         <Route path="*" element={<PageNotFound />} />
      </Routes>
   );
};

export default PassengerPages;
