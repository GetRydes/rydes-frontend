import { useState } from "react";
import { Input } from "../../../elements";
import styles from "./ride-details.module.scss";

const RideDetails = () => {
   const [formState, setFormState] = useState(0);

   const texts = ["Where can we pick you up?", "Where to?"];
   return (
      <div className={styles["ride-details"]}>
         <div className={styles["ride-details--top"]}>
            <div className={styles["ride-details--drag__icon"]}></div>
            <div className={styles["ride-details--text"]}>{texts[formState]}</div>
         </div>
         <div className={styles["ride-details--middle"]}>
            <div className={styles["input-fields"]}>
               <Input
                  onFocus={() => setFormState(0)}
                  placeholder="Enter pickup location"
                  name="pickup"
                  variant="combobox"
                  autoFocus
               />
               <Input
                  className={styles["destination"]}
                  onFocus={() => setFormState(1)}
                  placeholder="Enter destination"
                  name="destination"
                  variant="combobox"
               />
               <div className={styles["input-fields--icons"]}></div>
            </div>
         </div>
      </div>
   );
};

export default RideDetails;
