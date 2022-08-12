import React from "react";

import "./Spinner.scss";

const defaultProps = {
   type: "default",
   color: "#ffffff",
   size: 15,
} as const;

interface propTypes {
   type?: "default" | "alternate";
   color?: string;
   size?: number;
}

const Spinner: React.FC<propTypes> = (props = defaultProps) => {
   return (
      <div
         style={{
            borderRightColor: props.color,
            width: `${props.size}px`,
            height: `${props.size}px`,
         }}
         className={`lds-dual-ring ${props.type}`}
      />
   );
};

export default Spinner;
