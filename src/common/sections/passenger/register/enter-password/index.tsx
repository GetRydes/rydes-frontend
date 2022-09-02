import clx from "classnames";
import { EnterPasswordProps } from "./types";
import { FormBuilder } from "../../../../components";
import { passwordControls } from "../controls";
import formStyles from "../form.module.scss";
import registerStyles from "../register.module.scss";

export const EnterPassword: React.FC<EnterPasswordProps> = ({ onAction }) => {
   return (
      <div className={clx(formStyles.form, formStyles["full-width"])}>
         <h2 className={clx(registerStyles.heading)}>Create your account password</h2>
         <p className={clx(registerStyles.text)}>
            Your password must be at least 8 characters long and contain at least one letter and one
            digit
         </p>
         <FormBuilder
            controls={passwordControls}
            classNames={{}}
            onSubmit={onAction}
            submitButtonLabel="Join Rydes"
         />
      </div>
   );
};
