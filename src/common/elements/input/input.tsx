import React from "react";
import clx from "classnames";
import styles from "./input.module.scss";
import { InputProps } from "./types";

export * from "./types";

export const Input: React.FC<InputProps> = ({
   className = "",
   placeholder = "Enter text here",
   onChange,
   variant = "default",
   ...props
}) => {
   const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      onChange?.({ name: e.target.name, value: e.target.value });
   };

   const renderInput = () => {
      switch (variant) {
         case "combobox":
            return (
               <div
                  className={clx(
                     styles["input--combobox"],
                     { [styles.className]: className },
                     className,
                  )}
               >
                  <input placeholder={placeholder} onChange={handleOnChange} {...props} />
               </div>
            );
         case "default":
         default:
            return <input placeholder={placeholder} onChange={handleOnChange} {...props} />;
      }
   };

   return <>{renderInput()}</>;
};
