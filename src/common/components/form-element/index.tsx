import React from "react";
import clx from "classnames";
import OtpInput from "react-otp-input-rc-17";
import { FormElementProps } from "./types";
import { Input } from "../../elements";

export * from "./types";

export const FormElement: React.FC<FormElementProps> = ({
   label,
   properties: { classNames, ...properties },
}) => {
   const renderFormElement = () => {
      switch (properties.type) {
         case "text":
         case "number":
         case "email":
         case "password":
            return <Input {...properties} />;
         case "code":
            return (
               <OtpInput
                  separator={<span style={{ width: "10px" }}></span>}
                  {...properties}
                  onChange={(value: string) => {
                     properties.onChange({ target: { value, name: properties.name } });
                  }}
                  placeholder=""
                  inputStyle={{
                     width: "100%",
                  }}
               />
            );
         default:
            return <input {...properties} />;
      }
   };
   return (
      <div className={clx("form-content", classNames?.container)}>
         {label && <label>{label}</label>}
         {renderFormElement()}
      </div>
   );
};
