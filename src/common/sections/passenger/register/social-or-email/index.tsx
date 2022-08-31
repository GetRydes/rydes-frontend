import clx from "classnames";
import FormBuilder from "../../../../components/form-builder";
import { SocialAuth } from "../../../../layouts";
import { registerFormControls } from "./controls";
import { SocialOrEmailProps } from "./types";
import styles from "./social-or-email.module.scss";

export const SocialOrEmail: React.FC<SocialOrEmailProps> = ({ onAction }) => {
   return (
      <>
         <div className={clx(styles.info, styles["info-centre"])}>
            <div className={clx(styles["qa-subtitle"])}>Sign up with...</div>
            <SocialAuth strategies={["google", "facebook"]} />
            <div id="registration-subtitle" className={styles["registration-subtitle"]}>
               <p className={styles.subtitle} style={{ textAlign: "center" }}>
                  Signing up with social is super quick. No extra passwords to remember - no brain
                  fail. Don't worry, we'd never share any of your data or post anything on your
                  behalf #notevil
               </p>
            </div>
         </div>
         <div className={clx(styles.form, styles["form--register"])}>
            <h2 className={clx(styles["qa-use-email"], styles["last-child"])}>
               Or sign up with email
            </h2>
            <FormBuilder
               controls={registerFormControls}
               classNames={{}}
               onSubmit={onAction}
               submitButtonLabel="Join Rydes"
            />
         </div>
      </>
   );
};
