import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { FormBuilder } from "../../../components";
import { nameControls } from "./register.controls";
import { RegisterForm } from "./form-container";
import { EnterNamesProps } from "./register.types";
import { useRegister } from "../../../../adapters/passenger/actions/auth";
import { useAppContext } from "../../../../store";

export const EnterNames: React.FC<EnterNamesProps> = () => {
   const [{form}] = useAppContext();
   const [, setSearchParams] = useSearchParams();
   const registerPassenger = useRegister();
   const navigate = useNavigate();

   return (
      <RegisterForm.ItemContainer
         heading="What's your name?"
         text="Let us know how to properly address you"
         onGoBack={() => {
            navigate({
               pathname: "/passenger/register",
               search: `?${createSearchParams({
                  step: "4",
                  state: "password",
               })}`,
            });
         }}
      >
         <FormBuilder
            controls={nameControls}
            onSubmit={async () => {
               await registerPassenger({
                  firstName: form.firstName, 
                  lastName: form.lastName,
                  email: form.email,
                  phoneNumber: form.phoneNumber, 
                  password: form.password
               })
               setSearchParams({
                  step: "6",
                  state: "complete",
               });
            }}
            submitButtonLabel="Sign up"
         />
      </RegisterForm.ItemContainer>
   );
};
