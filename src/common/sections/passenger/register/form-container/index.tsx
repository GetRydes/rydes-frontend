import { RegisterFormSubcomponents } from "./types";
import styles from "./form-container.module.scss";

export const RegisterForm: React.FC & RegisterFormSubcomponents = () => {
   return <></>;
};

RegisterForm.ItemContainer = ({ children }) => {
   return (
      <div className={styles["item-container"]}>
         <div>
            {/* on the left, round border and light dark background */}
            <div>Go back arrow</div>
            {children}
         </div>
      </div>
   );
};
