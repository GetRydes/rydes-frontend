import clx from "classnames";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./profile-selector.module.scss";
import { ProfileSelectorProps } from "./types";

const ProfileSelector: React.FC<ProfileSelectorProps> = ({
   showProfileSelector,
   setShowProfileSelector,
   options,
}) => {
   return (
      <div
         className={clx(styles["profile-selector"], {
            [styles.show]: showProfileSelector,
         })}
      >
         <div className={styles["profile-selector__container"]}>
            <div
               className={clx(styles["close-icon"])}
               onClick={() =>
                  setShowProfileSelector((state) => ({
                     ...state,
                     visible: false,
                  }))
               }
            >
               <MdClose size={30} />
            </div>
            <div className={styles["options"]}>
               <div className={styles["options__container"]}>
                  {options.map(({ route, text }, key) => (
                     <Link to={route} key={key}>
                        <div className={styles["option"]}>
                           <h2 className={styles["text"]}>{text}</h2>
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
