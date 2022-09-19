import { createSearchParams, useNavigate } from "react-router-dom";
import { EnterPasswordProps } from "./register.types";
import { FormBuilder } from "../../../components";
import { passwordControls } from "./register.controls";
import { RegisterForm } from "./form-container";

export const EnterPassword: React.FC<EnterPasswordProps> = () => {
   const navigate = useNavigate();

   return (
      <RegisterForm.ItemContainer
         heading="Create your account password"
         text="Your password must be at least 8 characters long and contain at least one letter and one digit"
         onGoBack={() => {
            navigate({
               pathname: "/passenger/register",
               search: `?${createSearchParams({
                  step: "3",
                  state: "phone-number",
               })}`,
            });
         }}
      >
         <FormBuilder
            controls={passwordControls}
            onSubmit={() => {
               navigate({
                  pathname: "/passenger/register",
                  search: `?${createSearchParams({
                     step: "5",
                  })}`,
               });
            }}
            submitButtonLabel="Next"
         />
      </RegisterForm.ItemContainer>
   );
};
