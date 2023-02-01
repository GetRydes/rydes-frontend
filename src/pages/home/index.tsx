import cx from "classnames";
import { DefaultLayout } from "../../common/layouts";
import { Hero } from "../../common/sections";
import styles from "./home.module.scss";

const Home = () => {
   return (
      <DefaultLayout classNames={{ container: styles["layout-container"] }}>
         <Hero />
         <div className={styles["phone-block"]}>
            <div className={styles["image-container"]}>
               <div className={styles["cover-image"]}></div>
               <div className={cx(styles["circle-top"], styles["bg-circle"])}></div>
               <div className={cx(styles["circle-bottom"], styles["bg-circle"])}></div>
            </div>
            <div className={styles["content-wrapper"]}>
               <div className={styles["block-content"]}>
                  <div className={styles["bg-container"]}>
                     <div className={styles.row}>
                        <div className={styles.left}>
                           <h2>Get a ride in minutes!</h2>
                           <p>
                              Pick your destination, request a ride, meet your driver, enjoy the
                              journey.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </DefaultLayout>
   );
};

export default Home;
