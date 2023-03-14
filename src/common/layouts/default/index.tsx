import React, { useEffect } from "react";
import clx from "classnames";
import Header from "./components/header";
import styles from "./default.module.scss";
import { navLinks } from "./data";
import ProfileSelector from "./components/profile-selector";
import { Footer } from "./components";
import { actionSetFormItem, useAppContext } from "../../../store";
import { useLocation } from "react-router";

export interface LayoutProps {
   children: React.ReactNode;
   hasMobileOverlayNav?: Boolean;
   classNames?: { [key: string]: string };
}

export const DefaultLayout: React.FC<LayoutProps> = ({
   hasMobileOverlayNav = false,
   classNames = {},
   children,
}) => {
   const [{ form }, dispatch] = useAppContext();
   const location = useLocation();

   useEffect(() => {
      if (form.showProfileSelector.visible) {
         dispatch(
            actionSetFormItem({
               name: "showProfileSelector",
               value: {
                  ...form.showProfileSelector,
                  visible: false,
               },
            }),
         );
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location]);

   return (
      <div
         className={clx(styles["default-layout"], {
            [classNames?.container]: classNames?.container,
         })}
      >
         <ProfileSelector
            options={
               form.showProfileSelector.name === "signin"
                  ? [
                       {
                          text: "Sign in to drive",
                          route: "/driver/signin",
                       },
                       {
                          text: "Sign in to ride",
                          route: "/passenger/signin",
                       },
                    ]
                  : [
                       {
                          text: "Sign up to drive",
                          route: "/driver/register",
                       },
                       {
                          text: "Sign up to ride",
                          route: "/passenger/register",
                       },
                    ]
            }
         />
         <Header hasMobileOverlayNav={hasMobileOverlayNav} navLinks={navLinks} />
         <div
            className={clx(styles.children, {
               [styles["no-scroll"]]: form.showProfileSelector.visible,
            })}
         >
            {children}
            <Footer />
         </div>
      </div>
   );
};

export * from "./components";
