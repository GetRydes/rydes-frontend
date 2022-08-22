import clx from "classnames";
import { SocialAuthProps, SocialAuthSubcomponents } from "./types";
import styles from "./social-auth.module.scss";
import { capitalizeFirstLetter } from "../../../../../utils/helper";

const SocialAuth: React.FC<SocialAuthProps> & SocialAuthSubcomponents = ({ strategies }) => {
   return (
      <SocialAuth.Container>
         {strategies.map((strategy, index) => (
            <SocialAuth.Strategy key={index} name={strategy} />
         ))}
      </SocialAuth.Container>
   );
};

SocialAuth.Container = ({ children }) => {
   return (
      <div className={clx(styles.options, styles["four-buttons"])}>
         <div
            id="social-links-container"
            className={clx(
               styles["social-links-container"],
               styles["social-buttons-icon-with-text"],
            )}
         >
            <ul id="social-signin-list" style={{ listStyle: "none" }}>
               {children}
            </ul>
         </div>
      </div>
   );
};

SocialAuth.Strategy = ({ name }) => {
   return (
      <li className={styles["social-register"]}>
         <a
            href="/#"
            id={`signup-${name}`}
            className={clx(styles["social-link"], {
               [styles.gplus]: name === "google",
               [styles.facebook]: name === "facebook",
            })}
         >
            <div
               className={clx(styles.connect, styles[`${name}`], styles[`qa-sign-up-with-${name}`])}
            >
               <div
                  className={clx(styles.icon, styles[`qa-sign-up-with-${name}`])}
                  role="img"
                  aria-label={name}
               ></div>
               <div className={styles.text}>
                  <span>{capitalizeFirstLetter(name)}</span>
               </div>
            </div>
         </a>
      </li>
   );
};

export default SocialAuth;
