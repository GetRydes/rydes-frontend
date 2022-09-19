import OtpInputComponent from "react-otp-input-rc-17";
import { OtpInputProps } from "./types";

export const OtpInput: React.FC<OtpInputProps> = (properties) => {
   return (
      <OtpInputComponent
         separator={<span style={{ width: "10px" }}></span>}
         onChange={(value: string) => {
            properties.onChange?.({ value, name: properties.name });
         }}
         placeholder=""
         inputStyle={{
            width: "100%",
         }}
         numInputs={4}
         {...properties}
      />
   );
};

export * from "./types";
