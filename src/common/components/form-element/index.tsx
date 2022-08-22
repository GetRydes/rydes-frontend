import React from "react";
import clx from "classnames";
import { FormElementProps } from "./types";

const FormElement: React.FC<FormElementProps> = ({
   name,
   label,
   properties: { classNames, ...properties },
}) => {
   return (
      <div className={clx("form-content", classNames?.container)}>
         {label && <label>{label}</label>}
         <input {...properties} name={name} />
      </div>
   );
};

export default FormElement;
