import { useState } from "react";
import clx from "classnames";
import FormBuilder from "../../common/components/form-builder";
import { Button } from "../../common/elements";
import AuthLayout from "../../common/layouts/auth";
import { registerFormControls } from "./controls";
import styles from "./register.module.scss";
import SocialAuth from "../../common/layouts/auth/components/social-auth/social-auth";

const Register = () => {
   const [errors, setErrors] = useState<any>({});
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState<{ [key: string]: any }>({});

   const onFormSubmit = () => {
      setErrors({});
      setLoading(false);
   };

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
            <form onSubmit={onFormSubmit}>
               <FormBuilder
                  controls={registerFormControls(errors, onInputBlur)}
                  form={form}
                  setForm={setForm}
               />
               <div>
                  <Button type="submit" disabled={loading} loading={loading}>
                     Join Rydes
                  </Button>
               </div>
            </form>
         </div>
      </AuthLayout>
   );
};

export default Register;
