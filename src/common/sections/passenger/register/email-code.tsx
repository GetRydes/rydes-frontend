import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../../../../store";
import { FormBuilder } from "../../../components";
import { emailCodeFormControls } from "./register.controls";
import { RegisterForm } from "./form-container";
import { EmailCodeProps } from "./register.types";

export const EmailCode: React.FC<EmailCodeProps> = () => {
   const [{ form }] = useAppContext();
   const [, setSearchParams] = useSearchParams();

   return (
      <RegisterForm.ItemContainer heading={` Enter the 4-digit code sent to you at ${form.email}`}>
         <FormBuilder
            controls={emailCodeFormControls}
            onSubmit={() => {
               setSearchParams({
                  step: "3",
                  state: "phone-number",
               });
            }}
            submitButtonLabel="Join Rydes"
         />
         <div>I havent received a code (0.04)</div>
         {/* shows once timeout has expired */}
         <div>Resend </div>
      </RegisterForm.ItemContainer>
   );
};
