import { useState } from "react";
import { DriveTab, RideTab, TabHeader } from "./components";
import { HeroSubComponents } from "./types";
import riderHome from "./riderHome.webp";
import styles from "./hero.module.scss";

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
            <img src={riderHome} alt="Rider" />
         </div>
      </div>
   );
};

Hero.Tabs = function HeroTabs() {
   const [activeTab, setActiveTab] = useState(0);

   const renderTab = () => {
      switch (activeTab) {
         case 0:
            return <RideTab />;
         case 1:
            return <DriveTab />;
         default:
            return <RideTab />;
      }
   };

   return (
      <div style={{ width: "100%" }}>
         <div className={styles["hero__inner-content--container__tabs"]}>
            <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
         </div>
         <div className={styles["hero__inner-content--container__tabs--content"]}>
            <div className={styles["tab__item"]}>
               <div className={styles["tab__item--container"]}>
                  <div className={styles["tab__item--container__grid"]}>
                     <div className={styles["tab__item--container__inner"]}>{renderTab()}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
