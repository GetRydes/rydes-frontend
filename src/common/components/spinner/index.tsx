import React from "react";
import clx from "classnames";
import styles from "./spinner.module.scss";

interface SpinnerProps {
   type?: "default" | "alternate";
   color?: string;
   size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ color = "#fff", size = 15, type = "default" }) => {
   console.log("color ==>", color);
   return (
      <div
         style={{
            borderRightColor: color,
            width: `${size}px`,
            height: `${size}px`,
         }}
         className={clx(styles["lds-dual-ring"], styles[`${type}`])}
      />
   );
};

export default Spinner;
