import { Link } from "react-router-dom";
import { PASSENGER_ROUTE_PREFIX } from "../../../../../../utils/constants";
import { Input } from "../../../../../elements";
import styles from "./ride.module.scss";

const RideTab = () => {
   return (
      <div className={styles.content}>
         <div className={styles.title}>
            <h2>Request a ride now</h2>
         </div>
         <div className={styles["location__fields"]}>
            <Input placeholder="Enter pickup location" name="pickup" variant="combobox" />
            <Input
               className={styles.destination}
               placeholder="Enter destination"
               name="destination"
               variant="combobox"
            />
            <div className={styles["location__fields--icons"]}></div>
         </div>
         <Link to={`${PASSENGER_ROUTE_PREFIX}/ride`}>
            <div className={styles["action__buttons"]}>
               <div className={styles["action__buttons--request"]}>
                  <div>Request now</div>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default RideTab;
