import React from "react";
import { FormElementProps } from "./types";

const FormElement: React.FC<FormElementProps> = ({
  name,
  label,
  properties,
}) => {
  return (
    <div className="form-content">
      {label && <label>{label}</label>}
      <input {...properties} name={name} />
    </div>
  );
};

export default FormElement;
