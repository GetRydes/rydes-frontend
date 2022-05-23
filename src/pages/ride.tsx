import DefaultLayout from "../common/layouts/default";
import Maps from "../common/sections/ride/map/Map";
import RideDetails from "../common/sections/ride/ride-details/ride-details";

const Ride = () => {
  return (
    <DefaultLayout>
      <div className="ride">
        <RideDetails />
        <Maps />
      </div>
    </DefaultLayout>
  );
};

export default Ride;
