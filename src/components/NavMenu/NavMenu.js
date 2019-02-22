import React from "react";

import { RouterLink } from "../../components";
import logo from "../../assets/images/jazzlaug.png";
import styles from "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className={styles.NavMenuWrapper}>
      <div className={styles.NavMenu}>
        <RouterLink to="/">
          <img src={logo} alt="logo" />
        </RouterLink>
        <RouterLink to="/historikk">Tidligere artister</RouterLink>
        <RouterLink to="/praktisk">Praktisk</RouterLink>
        {/* <RouterLink to="/om">Om festivalen</RouterLink> */}
        {/* <RouterLink to="/frivillig">Frivillig</RouterLink> */}
      </div>
    </div>
  );
};

export default NavMenu;
