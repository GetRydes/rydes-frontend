import React, { useState } from "react";
import clx from "classnames";
import Header from "./components/header";
import styles from "./default.module.scss";
import { navLinks } from "./data";
import ProfileSelector from "./components/profile-selector";

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
   const [showProfileSelector, setShowProfileSelector] = useState({
      name: "signin",
      visible: false,
   });

   return (
      <div
         className={clx(styles["default-layout"], {
            [classNames?.container]: classNames?.container,
         })}
      >
         <ProfileSelector
            showProfileSelector={showProfileSelector.visible}
            setShowProfileSelector={setShowProfileSelector}
            options={
               showProfileSelector.name === "signin"
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
         <Header
            hasMobileOverlayNav={hasMobileOverlayNav}
            navLinks={navLinks}
            setShowProfileSelector={setShowProfileSelector}
         />
         <div className={styles.children}>{children}</div>
      </div>
   );
};

export * from "./components";
