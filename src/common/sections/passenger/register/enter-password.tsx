import { EnterPasswordProps } from "./register.types";
import { FormBuilder } from "../../../components";
import { passwordControls } from "./register.controls";
import { RegisterForm } from "./form-container";
import { useSearchParams } from "react-router-dom";

export const EnterPassword: React.FC<EnterPasswordProps> = () => {
   const [, setSearchParams] = useSearchParams();

   return (
      <RegisterForm.ItemContainer
         heading="Create your account password"
         text="Your password must be at least 8 characters long and contain at least one letter and one digit"
      >
         <FormBuilder
            controls={passwordControls}
            onSubmit={() => {
               setSearchParams({
                  step: "5",
               });
            }}
            submitButtonLabel="Join Rydes"
         />
      </RegisterForm.ItemContainer>
   );
};
