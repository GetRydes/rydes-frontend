import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationRoute from "../common/hocs/auth-route";
import PrivateRoute from "../common/hocs/private-route";
import PageNotFound from "../pages/404/404";
import routes from "./routes";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            {routes.map(({ path, Component, isProtected, isAuthRoute }, key) =>
               isProtected ? (
                  <Route
                     path={path}
                     element={
                        <PrivateRoute>
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
               ),
            )}
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
