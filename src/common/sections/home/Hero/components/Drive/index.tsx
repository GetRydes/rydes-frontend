import { Link } from "react-router-dom";
import { DRIVER_ROUTE_PREFIX } from "../../../../../../utils/constants";
import styles from "./drive.module.scss";

const DriveTab = () => {
   return (
      <div className={styles.content}>
         <div className={styles.title}>
            <h2>Get in the driver&#39;s seat and get paid</h2>
         </div>
         <div className={styles.paragraph}>
            <p>Drive on the platform with the largest network of active&nbsp;passengers.</p>
         </div>
         <Link to={`${DRIVER_ROUTE_PREFIX}/register`}>
            <div className={styles["action__buttons"]}>
               <div className={styles["action__buttons--request"]}>
                  <div>Sign up to drive</div>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default DriveTab;
