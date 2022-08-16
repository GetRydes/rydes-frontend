import React from "react";
import Header from "./header";
import "./default.scss";

interface LayoutProps {
   children: React.ReactNode;
   hasMobileOverlayNav?: Boolean;
}

const DefaultLayout: React.FC<LayoutProps> = ({ hasMobileOverlayNav = false, children }) => {
   return (
      <div className="default-layout">
         <Header hasMobileOverlayNav={hasMobileOverlayNav} />
         {children}
      </div>
   );
};

export default DefaultLayout;
