import clx from "classnames";
import formStyles from "../form.module.scss";
import registerStyles from "../register.module.scss";
import { FormBuilder } from "../../../../components";
import { nameControls } from "../controls";
import { EnterNamesProps } from "./types";

export const EnterNames: React.FC<EnterNamesProps> = ({ onAction }) => {
   return (
      <div className={clx(formStyles.form, formStyles["full-width"])}>
         <h2 className={clx(registerStyles.heading)}>What's your name?</h2>
         <p className={clx(registerStyles.text)}>Let us know how to properly address you</p>
         <FormBuilder
            controls={nameControls}
            classNames={{}}
            onSubmit={onAction}
            submitButtonLabel="Join Rydes"
         />
      </div>
   );
};
