import { useState } from "react";
import FormBuilder from "../../common/components/form-builder";
import { Button } from "../../common/elements";
import AuthLayout from "../../common/layouts/auth";
import { registerFormControls } from "./controls";
import "./register.scss";

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
      <AuthLayout className="register">
         <div className="info info-centre">
            <div className="qa-subtitle">Sign up with...</div>
            <div className="options four-buttons">
               <div
                  id="social-links-container"
                  className="social-links-container social-buttons-icon-with-text"
               >
                  <ul id="social-signin-list" style={{ listStyle: "none" }}>
                     <li className="social-register">
                        <a href="/#" id="signup-google" className="social-link gplus">
                           <div className="connect google qa-sign-up-with-google">
                              <div
                                 className="icon qa-sign-up-with-google"
                                 role="img"
                                 aria-label="google"
                              ></div>
                              <div className="text">
                                 <span>Google</span>
                              </div>
                           </div>
                        </a>
                     </li>
                     <li className="social-register">
                        <a href="/#" id="signup-facebook" className="social-link facebook">
                           <div className="connect facebook qa-sign-up-with-facebook">
                              <div
                                 className="icon qa-sign-up-with-facebook"
                                 role="img"
                                 aria-label="facebook"
                              ></div>
                              <div className="text">
                                 <span>Facebook</span>
                              </div>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div id="registration-subtitle">
               <p className="subtitle" style={{ textAlign: "center" }}>
                  Signing up with social is super quick. No extra passwords to remember - no brain
                  fail. Don't worry, we'd never share any of your data or post anything on your
                  behalf #notevil
               </p>
            </div>
         </div>
         <div className="form form--register">
            <h2 className="qa-use-email last-child">Or sign up with email</h2>
            <form onSubmit={onFormSubmit}>
               <FormBuilder
                  controls={registerFormControls(errors, onInputBlur)}
                  form={form}
                  setForm={setForm}
               />
               <div>
                  <Button
                     type="submit"
                     className="login-btn btn primary"
                     // disabled={email === "" || password === "" || loading}
                     loading={loading}
                  >
                     Join Rydes
                  </Button>
               </div>
            </form>
         </div>
      </AuthLayout>
   );
};

export default Register;
