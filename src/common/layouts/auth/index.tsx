import React from "react";
import clx from "classnames";
import { Link, useLocation } from "react-router-dom";
import { AuthLayoutProps } from "./types";
import { routes } from "./data";
import styles from "./auth.module.scss";

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
   const { pathname } = useLocation();

   return (
      <div className={clx(styles["layout--auth"], className)}>
         <div className={clx(styles["layout--auth__container"])}>
            <div className={clx(styles["layout--auth__container--header"])}>
               <h1 className={clx(styles["layout--auth__container--header__logo"])}>
                  <Link to="/">rydes.</Link>
               </h1>
            </div>
            <main className={clx(styles.main)}>
               <div className={clx(styles["layout--auth__signin"])}>
                  <div className={clx(styles["layout--auth__signin--options"])}>
                     {routes.map(({ path, name }, index) => (
                        <div
                           className={clx(styles["title"], styles["qa-title"], {
                              [styles["active"]]: pathname === path,
                              [styles["with-link"]]: pathname !== path,
                           })}
                           key={index}
                        >
                           <div className={clx(styles["qa-header"])}>
                              {pathname === path ? name : <Link to={path}>{name}</Link>}
                           </div>
                        </div>
                     ))}
                     <div className={clx(styles["clear"])}></div>
                  </div>
                  {children}
               </div>
            </main>
         </div>
      </div>
   );
};

export * from "./components";
