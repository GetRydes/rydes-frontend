import { OtpInputProps as OtpInputComponentProps } from "react-otp-input-rc-17";
import { ElementCommonProps } from "../../components";

export type OtpInputProps = Omit<OtpInputComponentProps, "onChange" | "numInputs"> &
   ElementCommonProps & { numInputs?: number };
