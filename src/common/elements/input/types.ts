import { ElementCommonProps } from "../../components";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "name"> &
   ElementCommonProps & { variant?: "default" | "combobox" | "code" };
