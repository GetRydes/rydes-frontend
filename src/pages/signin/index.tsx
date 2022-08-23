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
   const loginPassenger = useLogin();

   const onInputBlur = (e: any) => {};

   return (
      <AuthLayout className={styles["signin"]}>
         <div className={clx(styles["form"], styles["form--login"])}>
            <FormBuilder
               controls={loginFormControls(errors, onInputBlur)}
               classNames={{
                  form: styles["form--login__container"],
               }}
               onSubmit={loginPassenger}
               submitButtonLabel="Sign in"
            />
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
