import React from "react";

import { RouterLink } from "../../components";
import logo from "../../assets/images/jazzlaug.png";
import styles from "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className={styles.NavMenu}>
      <RouterLink to="/praktisk">Praktisk</RouterLink>
      <RouterLink to="/">
        <img src={logo} alt="logo" />
      </RouterLink>
      <RouterLink to="/historikk">Historikk</RouterLink>
      {/* <RouterLink to="/om">Om festivalen</RouterLink> */}
      {/* <RouterLink to="/frivillig">Frivillig</RouterLink> */}
    </div>
  );
};

export default NavMenu;
