import { useSearchParams } from "react-router-dom";
import { AuthLayout } from "../../../common/layouts";
import { EmailCode, EnterPassword, RegisterForm, SocialOrEmail } from "../../../common/sections";
import { EnterNames } from "../../../common/sections/passenger/register/enter-names";
import styles from "./register.module.scss";

const Register = () => {
   let [searchParams, setSearchParams] = useSearchParams();

   const renderRegisterPage = (step: string) => {
      switch (step) {
         case "1":
            return (
               <SocialOrEmail
                  onAction={() => {
                     setSearchParams({
                        step: "2",
                        state: "email-code",
                     });
                  }}
               />
            );
         case "2":
            return (
               <RegisterForm.ItemContainer>
                  <EmailCode
                     onAction={() => {
                        setSearchParams({
                           step: "3",
                           state: "phone-number",
                        });
                     }}
                  />
               </RegisterForm.ItemContainer>
            );
         case "3":
            return (
               <RegisterForm.ItemContainer>
                  {/* phone number */}
                  <EnterPassword
                     onAction={() => {
                        setSearchParams({
                           step: "4",
                           state: "password",
                        });
                     }}
                  />
               </RegisterForm.ItemContainer>
            );
         case "4":
            return (
               <RegisterForm.ItemContainer>
                  {/* enter and confirm password */}
                  {/* specify password rules */}
                  <EnterPassword
                     onAction={() => {
                        setSearchParams({
                           step: "5",
                           state: "enter-names",
                        });
                     }}
                  />
               </RegisterForm.ItemContainer>
            );
         case "5":
            return (
               <RegisterForm.ItemContainer>
                  {/* enter first name and last name */}
                  <EnterNames
                     onAction={() => {
                        setSearchParams({
                           step: "6",
                           state: "enter-names",
                        });
                     }}
                  />
               </RegisterForm.ItemContainer>
            );
         case "6":
            return (
               <RegisterForm.ItemContainer>
                  {/* done last step and then redirect to ride page */}
                  <div>step 5</div>
               </RegisterForm.ItemContainer>
            );
         default:
            return <RegisterForm.ItemContainer />;
      }
   };

   return (
      <AuthLayout className={styles.register}>
         {renderRegisterPage(searchParams.get("step") ?? "1")}
      </AuthLayout>
   );
};

export default Register;
