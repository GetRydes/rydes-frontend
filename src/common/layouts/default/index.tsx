import React from "react";
import Header from "./header";
import styles from "./default.module.scss";
import { navLinks } from "./data";

interface LayoutProps {
   children: React.ReactNode;
   hasMobileOverlayNav?: Boolean;
}

const DefaultLayout: React.FC<LayoutProps> = ({ hasMobileOverlayNav = false, children }) => {
   return (
      <div className={styles["default-layout"]}>
         <Header hasMobileOverlayNav={hasMobileOverlayNav} navLinks={navLinks} />
         {children}
      </div>
   );
};

export default DefaultLayout;
