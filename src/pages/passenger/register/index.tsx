import { useSearchParams } from "react-router-dom";
import { AuthLayout } from "../../../common/layouts";
import {
   Complete,
   EmailCode,
   EnterNames,
   EnterPassword,
   PhoneNumber,
   RegisterForm,
   SocialOrEmail,
} from "../../../common/sections";
import styles from "./register.module.scss";

const Register = () => {
   const [searchParams] = useSearchParams();

   const renderRegisterPage = (step: string) => {
      switch (step) {
         case "1":
            return <SocialOrEmail />;
         case "2":
            return <EmailCode />;
         case "3":
            // this is for phone number
            // user should be able to skip
            return <PhoneNumber />;
         case "4":
            return <EnterPassword />;
         case "5":
            return <EnterNames />;
         case "6":
            return <Complete />;
         default:
            return <RegisterForm.ItemContainer heading="You are lost bro" />;
      }
   };

   return (
      <AuthLayout className={styles.register}>
         {renderRegisterPage(searchParams.get("step") ?? "1")}
      </AuthLayout>
   );
};

export default Register;
