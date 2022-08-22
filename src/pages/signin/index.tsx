import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../adapters/passenger/actions/auth";
import FormBuilder from "../../common/components/form-builder";
import { Button } from "../../common/elements";
import AuthLayout from "../../common/layouts/auth";
import { loginFormControls } from "./controls";
import clx from "classnames";
import styles from "./signin.module.scss";
import SocialAuth from "../../common/layouts/auth/components/social-auth/social-auth";

const Login = () => {
   const [errors, setErrors] = useState<any>({});
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState<{ [key: string]: any }>({});
   const loginPassenger = useLogin();

   const onFormSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      setErrors({});
      setLoading(true);
      const response = await loginPassenger();
      setLoading(false);
   };

   const onInputBlur = (e: any) => {};

   return (
      <AuthLayout className={styles["signin"]}>
         <div className={clx(styles["form"], styles["form--login"])}>
            <form onSubmit={onFormSubmit} className={styles["form--login__container"]}>
               <FormBuilder
                  controls={loginFormControls(errors, onInputBlur)}
                  form={form}
                  setForm={setForm}
               />
               <Button type="submit" disabled={loading} loading={loading}>
                  Sign in
               </Button>
            </form>
            <div className={styles["forgot-password"]}>
               <Link to="/forgot-password">Forgot password?</Link>
            </div>
         </div>
         <div className={clx(styles.info, styles["info-centre"])}>
            <h2 className={styles["qa-subtitle"]}>Or sign in with...</h2>
            <div className={styles.clear}></div>
            <SocialAuth strategies={["google", "facebook"]} />
            <div className={styles.clear}></div>
         </div>
      </AuthLayout>
   );
};

export default Login;
