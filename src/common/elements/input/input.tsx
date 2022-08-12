import React from "react";
import "./input.scss";

const defaultProps = {
   classname: "",
   onFocus: () => {},
   placeholder: "Enter text here",
} as const;

interface InputProps {
   classname?: string;
   onFocus?: any;
   placeholder?: string;
}

const Input: React.FC<InputProps> = ({ classname, onFocus, placeholder } = defaultProps) => {
   return (
      <div className={`input--combobox ${classname}`}>
         <input placeholder={placeholder} onFocus={onFocus} />
      </div>
   );
};

export default Input;
