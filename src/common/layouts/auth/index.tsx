import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthLayoutProps } from "./types";

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  const location = useLocation();
  const routes = [
    {
      path: "/register",
      name: "Join",
    },
    {
      path: "/signin",
      name: "Sign in",
    },
  ];

  return (
    <main className={`layout--auth ${className ?? ""}`}>
      <div className="layout--auth__container">
        <div className="layout--auth__container--header">
          <h1 className="layout--auth__container--header__logo">
            <Link to="/">rydes.</Link>
          </h1>
        </div>
        <main>
          <div className="layout--auth__signin">
            <div className="layout--auth__signin--options">
              {routes.map((route, index) => (
                <div
                  className={`title qa-title ${
                    location.pathname === route.path ? "active" : "with-link"
                  }`}
                  key={index}
                >
                  <div className="qa-header">
                    {location.pathname === route.path ? (
                      route.name
                    ) : (
                      <Link to={route.path}>{route.name}</Link>
                    )}
                  </div>
                </div>
              ))}
              {/* <div className="title qa-title with-link">
                <div className="qa-header">
                  <Link to="/register">Join</Link>
                </div>
              </div>
              <div className="title qa-title active">
                <div className="qa-header">Sign in</div>
              </div> */}
              <div className="clear"></div>
            </div>
            {children}
          </div>
        </main>
      </div>
    </main>
  );
};

export default AuthLayout;
