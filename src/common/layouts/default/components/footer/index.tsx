import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <div>
               <div className={styles.logo}>
                  <Link to="/">rydes.</Link>
               </div>
               <br />
               <p>
                  made with<>&nbsp;</>
                  <span className={styles.heart}>&#10084;</span>
                  &nbsp;by&nbsp;
                  <a
                     href="https://ponnle.xyz"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.owner}
                  >
                     Onuchukwu
                  </a>
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
