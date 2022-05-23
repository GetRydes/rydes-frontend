import React from "react";
import Header from "../sections/home/Header";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
