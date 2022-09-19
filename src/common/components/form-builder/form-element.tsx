import React from "react";
import clx from "classnames";
// import OtpInput from "react-otp-input-rc-17";
import { FormElementProps } from "./types";
import { Input, OtpInput } from "../../elements";

export * from "./types";

export const FormElement: React.FC<FormElementProps> = ({
   label,
   type,
   properties: { classNames, ...properties },
}) => {
   const renderFormElement = () => {
      switch (type) {
         case "input":
            return <Input {...properties} />;
         case "code":
            return <OtpInput {...properties} />;
         default:
            return <Input {...properties} />;
      }
   };
   return (
      <div className={clx("form-content", classNames?.container)}>
         {label && <label>{label}</label>}
         {renderFormElement()}
      </div>
   );
};
