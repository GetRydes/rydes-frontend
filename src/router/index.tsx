import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../providers";
import routes from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component, isProtected }, key) =>
          isProtected ? (
            <Route
              path={path}
              element={
                <AuthProvider>
                  <Component />
                </AuthProvider>
              }
              key={key}
            />
          ) : (
            <Route path={path} element={<Component />} key={key} />
          )
        )}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
