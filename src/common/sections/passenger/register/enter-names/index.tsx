import { useSearchParams } from "react-router-dom";
import { FormBuilder } from "../../../../components";
import { nameControls } from "../controls";
import { RegisterForm } from "../form-container";
import { EnterNamesProps } from "./types";

export const EnterNames: React.FC<EnterNamesProps> = () => {
   const [, setSearchParams] = useSearchParams();

   return (
      <RegisterForm.ItemContainer
         heading="What's your name?"
         text="Let us know how to properly address you"
      >
         <FormBuilder
            controls={nameControls}
            onSubmit={() => {
               setSearchParams({
                  step: "6",
                  state: "enter-names",
               });
            }}
            submitButtonLabel="Join Rydes"
         />
      </RegisterForm.ItemContainer>
   );
};
