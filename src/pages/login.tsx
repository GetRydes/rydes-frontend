import { useState } from "react";
import { Link } from "react-router-dom";
import FormBuilder from "../common/components/form-builder";
import { Button } from "../common/elements";
import AuthLayout from "../common/layouts/auth";

const Login = () => {
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{ [key: string]: any }>({});

  const onFormSubmit = () => {
    setErrors({});
    setLoading(false);
  };

  const onInputBlur = (e: any) => {};

  return (
    <AuthLayout>
      <div className="form form--login">
        <form onSubmit={onFormSubmit}>
          <FormBuilder
            controls={LoginFormControls(errors, onInputBlur)}
            form={form}
            setForm={setForm}
          />
          <Button
            type="submit"
            className="login-btn primary btn"
            // disabled={email === "" || password === "" || loading}
            loading={loading}
          >
            Sign in
          </Button>
        </form>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
      <div className="info info-centre">
        <h2 className="qa-subtitle">Or sign in with...</h2>
        <div className="clear"></div>

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
                <a
                  href="/#"
                  id="signup-facebook"
                  className="social-link facebook"
                >
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
        <div className="clear"></div>
      </div>
    </AuthLayout>
  );
};

const LoginFormControls = (
  errors: { [key: string]: any },
  onBlur: React.FocusEventHandler<HTMLInputElement>
) => [
  {
    name: "email",
    label: "Email Address",
    properties: {
      type: "email",
      placeholder: "jack.robinson@bankr.com",
      required: true,
      className: errors.email ? "invalid" : "",
      onBlur,
    },
  },
  {
    name: "password",
    label: "Password",
    properties: {
      type: "password",
      placeholder: "********",
      required: true,
      className: errors.password ? "invalid" : "",
      onBlur,
    },
  },
];

export default Login;
