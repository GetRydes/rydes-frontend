import clx from "classnames";
import { RegisterFormSubcomponents } from "./types";
import styles from "./form-container.module.scss";
import registerStyles from "../register.module.scss";
import formStyles from "../form.module.scss";

export const RegisterForm: React.FC & RegisterFormSubcomponents = () => {
   return <></>;
};

RegisterForm.ItemContainer = ({ children, heading, text }) => {
   return (
      <div className={styles["item-container"]}>
         <div>
            {/* on the left, round border and light dark background */}
            <div>Go back arrow</div>
            <div className={clx(formStyles.form, formStyles["full-width"])}>
               <h2 className={registerStyles.heading}>{heading}</h2>
               {text && <p className={registerStyles.text}>{text}</p>}
               {children}
            </div>
         </div>
      </div>
   );
};
