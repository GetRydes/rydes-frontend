import { useState } from "react";
import { Input } from "../../../elements";
import ClockSVG from "./clock";
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
            <div className={styles["time-picker"]}>
               <button className={styles.button}>
                  <div className={styles["clock-icon"]}>
                     <ClockSVG />
                  </div>
                  Leave Now
                  <div className={styles["dropdown-icon"]}>
                     <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                        <title>Chevron down small</title>
                        <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8z" fill="currentColor"></path>
                     </svg>
                  </div>
               </button>
            </div>
         </div>
         <div className={styles["ride-picker"]}>
            <div className={styles["ride-picker--container"]}>
               <ul role="listbox" tabIndex={0} className={styles["ride-picker--list"]}>
                  <li
                     aria-selected="true"
                     role="option"
                     tabIndex={0}
                     className={styles["ride-picker--item"]}
                  >
                     <div className={styles["ride-image"]}>
                        <img
                           alt="Local Cab"
                           height="88"
                           src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/uberMinicab_360x360.png"
                        />
                     </div>
                     <div className={styles["ride-picker--item__details"]}>
                        <div className={styles.description}>
                           <p className={styles.name}>
                              Local Cab
                              <span className={styles["passenger-icon"]}>
                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <title>Person</title>
                                    <path
                                       fill-rule="evenodd"
                                       clip-rule="evenodd"
                                       d="M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3H3v-3z"
                                       fill="currentColor"
                                    ></path>
                                 </svg>
                              </span>
                              <span className={styles["passenger-number"]}>4</span>
                           </p>
                           <p
                              data-testid="product_selector.list_item.eta_string"
                              className={styles.availability}
                           >
                              Unavailable
                           </p>
                           <p className={styles["additional-info"]}>Booked with a local operator</p>
                        </div>
                        <div className={styles.price}>
                           <div className={styles["price--container"]}>
                              <p className={styles["price--text"]}>£39.05-40.05</p>
                           </div>
                           <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className={styles["next-icon"]}
                           >
                              <title>Chevron right small</title>
                              <path
                                 d="M16.9 12l-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6z"
                                 fill="currentColor"
                              ></path>
                           </svg>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
         <div className={styles["ride-actions"]}>
            <div className={styles["payment-method"]}>
               <div className={styles["payment-method--container"]}>
                  <img
                     alt="payment-method"
                     className={styles["payment-method--image"]}
                     src="https://tb-static.uber.com/prod/wallet/icons/mastercard_3x.png"
                  />
                  <div className={styles["payment-method--text"]}>Mastercard ••••0112</div>
               </div>
               <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                  <title>Chevron right small</title>
                  <path d="M16.9 12l-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6z" fill="currentColor"></path>
               </svg>
            </div>
            <button disabled={true} className={styles["ride-actions--button"]}>
               Local Cab is unavailable
            </button>
         </div>
      </div>
   );
};

export default RideDetails;
