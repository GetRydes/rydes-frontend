import clx from "classnames";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { actionSetFormItem, useAppContext } from "../../../../../store";
import styles from "./profile-selector.module.scss";
import { ProfileSelectorProps } from "./types";

const ProfileSelector: React.FC<ProfileSelectorProps> = ({ options }) => {
   const [{ form }, dispatch] = useAppContext();

   return (
      <div
         className={clx(styles["profile-selector"], {
            [styles.show]: form.showProfileSelector.visible,
         })}
      >
         <div className={styles["profile-selector__container"]}>
            <div
               className={clx(styles["close-icon"])}
               onClick={() => {
                  dispatch(
                     actionSetFormItem({
                        name: "showProfileSelector",
                        value: {
                           ...form.showProfileSelector,
                           visible: false,
                        },
                     }),
                  );
               }}
            >
               <MdClose size={30} />
            </div>
            <div className={styles["options"]}>
               <div className={styles["options__container"]}>
                  {options.map(({ route, text }, key) => (
                     <Link to={route} key={key}>
                        <div className={styles["option"]}>
                           <h2 className={styles["text"]}>{text}</h2>
                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                              <path
                                 d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z"
                                 fill="currentColor"
                              ></path>
                           </svg>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileSelector;
