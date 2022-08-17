import { Link, NavLink } from "react-router-dom";
import clx from "classnames";
import styles from "./header.module.scss";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ hasMobileOverlayNav = false, navLinks }) => {
   return (
      <header
         className={clx(styles["header"], {
            [styles["mobile-overlay"]]: hasMobileOverlayNav,
         })}
      >
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
            <Link to="/register">
               <div className={styles["get-started"]}>Get started</div>
            </Link>
         </div>
      </header>
   );
};

export default Header;
