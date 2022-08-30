import clx from "classnames";
import FormBuilder from "../../../common/components/form-builder";
import AuthLayout from "../../../common/layouts/auth";
import { registerFormControls } from "./controls";
import styles from "./register.module.scss";
import SocialAuth from "../../../common/layouts/auth/components/social-auth/social-auth";

const Register = () => {
   const onInputBlur = (e: any) => {};

   return (
      <AuthLayout className={styles.register}>
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
               controls={registerFormControls({}, onInputBlur)}
               classNames={{}}
               onSubmit={() => {}}
               submitButtonLabel="Join Rydes"
            />
         </div>
      </AuthLayout>
   );
};

export default Register;
