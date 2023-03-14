import { Link, NavLink } from "react-router-dom";
import clx from "classnames";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./header.module.scss";
import { HeaderProps } from "./types";
import { Button } from "../../../../elements";
import { actionSetFormItem, useAppContext } from "../../../../../store";

const Header: React.FC<HeaderProps> = ({ hasMobileOverlayNav = false, navLinks }) => {
   const [{ form }, dispatch] = useAppContext();

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
            <div className={clx(styles["nav-links"], styles["mw-md"])}>
               {navLinks.map(({ path, name }, index) => (
                  <nav key={index} className={styles.nav}>
                     <NavLink to={path}>{name}</NavLink>
                  </nav>
               ))}
            </div>
            <div className={clx(styles["action-links"], styles["mw-sm"])}>
               <Button
                  variant="outlined"
                  className={styles["sign-in"]}
                  onClick={() => {
                     dispatch(
                        actionSetFormItem({
                           name: "showProfileSelector",
                           value: {
                              name: "signin",
                              visible:
                                 form.showProfileSelector.name === "signin"
                                    ? !form.showProfileSelector.visible
                                    : true,
                           },
                        }),
                     );
                  }}
               >
                  Sign in
               </Button>
               <Button
                  className={styles["get-started"]}
                  onClick={() => {
                     dispatch(
                        actionSetFormItem({
                           name: "showProfileSelector",
                           value: {
                              name: "get-started",
                              visible:
                                 form.showProfileSelector.name === "get-started"
                                    ? !form.showProfileSelector.visible
                                    : true,
                           },
                        }),
                     );
                  }}
               >
                  Get started
               </Button>
            </div>
            <GiHamburgerMenu size={22} className={styles["w-sm"]} />
         </div>
      </header>
   );
};

export default Header;
