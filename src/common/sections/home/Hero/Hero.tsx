import { useState } from "react";
import { Link } from "react-router-dom";
import { PASSENGER_ROUTE_PREFIX } from "../../../../utils/constants";
import { Input } from "../../../elements";
import TabHeader from "./TabHeader";
import styles from "./hero.module.scss";
import { HeroSubComponents } from "./types";

const Hero: React.FC & HeroSubComponents = () => {
   return (
      <section className={styles.hero}>
         <div className={styles["hero__inner"]}>
            <Hero.Background />
            <div className={styles["hero__inner-content"]}>
               <div className={styles["hero__inner-content--container"]}>
                  <Hero.Tabs />
               </div>
            </div>
         </div>
      </section>
   );
};

Hero.Background = () => {
   return (
      <div className={styles["hero__inner-bg"]}>
         <div className={styles["hero__inner-bg--inner"]}>
            <img
               src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1903,h_644/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png"
               alt="Rider"
            />
         </div>
      </div>
   );
};

Hero.Tabs = function HeroTabs() {
   const [activeTab, setActiveTab] = useState(0);

   return (
      <div style={{ width: "100%" }}>
         <div className={styles["hero__inner-content--container__tabs"]}>
            <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
         </div>
         <div className={styles["hero__inner-content--container__tabs--content"]}>
            <div className={styles["tab__item"]}>
               <div className={styles["tab__item--container"]}>
                  <div className={styles["tab__item--container__grid"]}>
                     <div className={styles["tab__item--container__inner"]}>
                        <div className={styles["tab__item--container__content"]}>
                           <div className={styles.title}>
                              <h2>Request a ride now</h2>
                           </div>
                           <div className={styles["location__fields"]}>
                              <Input
                                 placeholder="Enter pickup location"
                                 name="pickup"
                                 variant="combobox"
                              />
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
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
