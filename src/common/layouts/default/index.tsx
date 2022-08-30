import React, { useState } from "react";
import Header from "./header";
import styles from "./default.module.scss";
import { navLinks } from "./data";
import ProfileSelector from "./profile-selector";

interface LayoutProps {
   children: React.ReactNode;
   hasMobileOverlayNav?: Boolean;
}

const DefaultLayout: React.FC<LayoutProps> = ({ hasMobileOverlayNav = false, children }) => {
   const [showProfileSelector, setShowProfileSelector] = useState(false);

   return (
      <div className={styles["default-layout"]}>
         <ProfileSelector
            showProfileSelector={showProfileSelector}
            setShowProfileSelector={setShowProfileSelector}
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

export default DefaultLayout;
