import { Link, NavLink } from "react-router-dom";
import clx from "classnames";
import styles from "./header.module.scss";
import { HeaderProps } from "./types";
import { Button } from "../../../elements";

const Header: React.FC<HeaderProps> = ({
   hasMobileOverlayNav = false,
   navLinks,
   setShowProfileSelector,
}) => {
   return (
      <header
         className={clx(styles.container, {
            [styles["mobile-overlay"]]: hasMobileOverlayNav,
         })}
      >
         <div className={clx(styles["header"])}>
            <div className={styles.logo}>
               <Link to="/">rydes.</Link>
            </div>
            <div className={styles["nav-links"]}>
               {navLinks.map(({ path, name }, index) => (
                  <nav key={index} className={styles.nav}>
                     <NavLink to={path}>{name}</NavLink>
                  </nav>
               ))}
            </div>
            <div className={styles["action-links"]}>
               <Link to="/signin">Sign in</Link>
               <Button
                  className={styles["get-started"]}
                  onClick={() => setShowProfileSelector((state) => !state)}
               >
                  Get started
               </Button>
            </div>
         </div>
      </header>
   );
};

export default Header;
