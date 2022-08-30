import { Route, Routes } from "react-router";
import AuthenticationRoute from "../../common/hocs/auth-route";
import PrivateRoute from "../../common/hocs/private-route";
import { driverRoutes } from "./routes";

const DriverPages = () => {
   return (
      <Routes>
         {driverRoutes.map(({ Component, path, isAuthRoute, isProtected }, key) => {
            return isProtected ? (
               <Route
                  path={path}
                  element={
                     <PrivateRoute userType="DRIVER">
                        <Component />
                     </PrivateRoute>
                  }
                  key={key}
               />
            ) : isAuthRoute ? (
               <Route
                  path={path}
                  element={
                     <AuthenticationRoute userType="DRIVER">
                        <Component />
                     </AuthenticationRoute>
                  }
                  key={key}
               />
            ) : (
               <Route path={path} element={<Component />} key={key} />
            );
         })}
      </Routes>
   );
};

export default DriverPages;
