import React from "react";
import FormElement from "../form-element";
import { FormBuilderProps } from "./types";

const FormBuilder: React.FC<FormBuilderProps> = ({ controls }) => {
   return (
      <>
         {controls.map((properties, index) => (
            <FormElement {...properties} key={index} />
         ))}
      </>
   );
};

export default FormBuilder;
