import clx from "classnames";
import { useAppContext } from "../../../../../store";
import { FormBuilder } from "../../../../components";
import { emailCodeFormControls } from "./controls";
import { EmailCodeProps } from "./types";
import styles from "./email-code.module.scss";

export const EmailCode: React.FC<EmailCodeProps> = ({ onAction }) => {
   const [{ form }] = useAppContext();

   return (
      <>
         <div className={clx(styles.form, styles["form--register"])}>
            <h2 className={clx(styles["qa-use-email"], styles["last-child"])}>
               Enter the 4-digit code sent to you at {form.email}
            </h2>
            <FormBuilder
               controls={emailCodeFormControls}
               classNames={{}}
               onSubmit={onAction}
               submitButtonLabel="Join Rydes"
            />
         </div>
         <div>I havent received a code (0.04)</div>
         {/* shows once timeout has expired */}
         <div>Resend </div>
      </>
   );
};
