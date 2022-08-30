import clx from "classnames";
import { Link } from "react-router-dom";
import styles from "./profile-selector.module.scss";
import { ProfileSelectorProps } from "./types";

const ProfileSelector: React.FC<ProfileSelectorProps> = ({ showProfileSelector }) => {
   return (
      <div
         className={clx(styles["profile-selector"], {
            [styles.show]: showProfileSelector,
         })}
      >
         <div>close icon</div>
         <div>
            <Link to="/driver/signin">Sign in to drive</Link>
            <Link to="/passenger/signin">Sign in to ride</Link>
         </div>
      </div>
   );
};

export default ProfileSelector;
