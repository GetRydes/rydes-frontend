import { useEffect } from "react";
import clx from "classnames";
import { BsArrowRight } from "react-icons/bs";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../../store";
import { FormBuilder } from "../../../components";
import { emailCodeFormControls } from "./register.controls";
import { RegisterForm } from "./form-container";
import { EmailCodeProps } from "./register.types";
import { actionSetFormItem } from "../../../../store/actions/form.action";
import registerStyles from "./register.module.scss";

export const EmailCode: React.FC<EmailCodeProps> = () => {
   const navigate = useNavigate();
   const [{ form }, dispatch] = useAppContext();

   useEffect(() => {
      if (form?.countdown && form?.countdown > 0) {
         setTimeout(
            () => dispatch(actionSetFormItem({ name: "countdown", value: form.countdown - 1 })),
            1000,
         );
      }
      // eslint-disable-next-line
   }, [form?.countdown]);

   useEffect(() => {
      if (!form.email) navigate("/passenger/register", { replace: true });
      dispatch(actionSetFormItem({ name: "countdown", value: 15 }));
      // eslint-disable-next-line
   }, []);

   return (
      <RegisterForm.ItemContainer
         heading={` Enter the 4-digit code sent to you at ${form.email}`}
         onGoBack={() => {
            navigate({
               pathname: "/passenger/register",
               search: `?${createSearchParams({
                  step: "1",
                  state: "phone-number",
               })}`,
            });
         }}
      >
         <FormBuilder
            controls={emailCodeFormControls}
            onSubmit={() => {
               navigate({
                  pathname: "/passenger/register",
                  search: `?${createSearchParams({
                     step: "3",
                     state: "phone-number",
                  })}`,
               });
            }}
            submitButtonLabel="Next"
         />
         <div className={registerStyles.bottom}>
            {form.countdown > 0 && true ? (
               <div className={clx(registerStyles["no-code"], registerStyles.disabled)}>
                  <span>I haven't received a code</span>&nbsp;
                  <span>
                     ({form.countdown ? `0:${String(form.countdown).padStart(2, "0")}` : `0:00`})
                  </span>
               </div>
            ) : (
               <div className={clx(registerStyles["no-code"], registerStyles.resend)}>
                  <span className={registerStyles.pointer}>Resend code</span>
                  <BsArrowRight />
               </div>
            )}
         </div>
      </RegisterForm.ItemContainer>
   );
};
