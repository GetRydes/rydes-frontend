import { DefaultLayout } from "../../../common/layouts";
import { Maps } from "../../../common/sections";
import { RideDetails } from "../../../common/sections";
import styles from "./ride.module.scss";

const Ride = () => {
   return (
      <DefaultLayout hasMobileOverlayNav>
         <div className={styles.ride}>
            <Maps />
            <RideDetails />
         </div>
      </DefaultLayout>
   );
};

export default Ride;
