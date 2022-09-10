import clx from "classnames";
import { BsArrowLeft } from "react-icons/bs";
import { RegisterFormSubcomponents } from "./types";
import styles from "./form-container.module.scss";
import registerStyles from "../register.module.scss";
import formStyles from "../form.module.scss";

export const RegisterForm: React.FC & RegisterFormSubcomponents = () => {
   return <></>;
};

RegisterForm.ItemContainer = ({ children, heading, text, onGoBack }) => {
   return (
      <div className={styles["item-container"]}>
         <div>
            <div className={registerStyles["back-arrow"]} onClick={onGoBack}>
               <BsArrowLeft />
            </div>
            <div className={clx(formStyles.form, formStyles["full-width"])}>
               <h2 className={registerStyles.heading}>{heading}</h2>
               {text && <p className={registerStyles.text}>{text}</p>}
               {children}
            </div>
         </div>
      </div>
   );
};
