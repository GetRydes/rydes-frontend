import { ElementCommonProps } from "../../components";

export type InputProps = Omit<
   React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
   "onChange"
> &
   ElementCommonProps & { variant?: "default" | "combobox" | "code" };
