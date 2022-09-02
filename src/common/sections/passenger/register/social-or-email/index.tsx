import clx from "classnames";
import { useSearchParams } from "react-router-dom";
import FormBuilder from "../../../../components/form-builder";
import { SocialAuth } from "../../../../layouts";
import { registerFormControls } from "../controls";
import { SocialOrEmailProps } from "./types";
import styles from "./social-or-email.module.scss";
import formStyles from "../form.module.scss";

export const SocialOrEmail: React.FC<SocialOrEmailProps> = () => {
   const [, setSearchParams] = useSearchParams();
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
         <div className={clx(formStyles.form)}>
            <h2 className={clx(styles.heading, styles["last-child"])}>Or sign up with email</h2>
            <FormBuilder
               controls={registerFormControls}
               classNames={{ form: formStyles["form--container"] }}
               onSubmit={() => {
                  setSearchParams({
                     step: "2",
                     state: "email-code",
                  });
               }}
               submitButtonLabel="Join Rydes"
            />
         </div>
      </>
   );
};
