import DefaultLayout from "../../../common/layouts/default";
import Maps from "../../../common/sections/ride/map/Map";
import RideDetails from "../../../common/sections/ride/ride-details/ride-details";
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
