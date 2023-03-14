import { createSearchParams, useNavigate } from "react-router-dom";
import { FormBuilder } from "../../../components";
import { RegisterForm } from "./form-container";
import { phoneNumberControls } from "./register.controls";
import { PhoneNumberProps } from "./register.types";

export const PhoneNumber: React.FC<PhoneNumberProps> = () => {
   const navigate = useNavigate();

   return (
      <RegisterForm.ItemContainer
         heading="Enter your phone number?"
         text="Let us know how to properly address you"
         onGoBack={() => {
            navigate({
               pathname: "/passenger/register",
               search: `?${createSearchParams({
                  step: "2",
                  state: "phone-number",
               })}`,
            });
         }}
      >
         <FormBuilder
            controls={phoneNumberControls}
            onSubmit={() => {
               navigate({
                  pathname: "/passenger/register",
                  search: `?${createSearchParams({
                     step: "4",
                     state: "enter-names",
                  })}`,
               });
            }}
            submitButtonLabel="Next"
         />
      </RegisterForm.ItemContainer>
   );
};
