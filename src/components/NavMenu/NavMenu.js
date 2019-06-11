import React from "react";
import { isMobile } from "react-device-detect";

import { RouterLink } from "../../components";
import styles from "./NavMenu.css";

const NavMenu = () => {
  return (
    <>
      <div className={styles.NavMenu}>
        <RouterLink to="/">Artister</RouterLink>
        <RouterLink to="/billetter">Billetter</RouterLink>
        {isMobile && <RouterLink to="/program">Program</RouterLink>}
        <RouterLink to="/praktisk">Praktisk</RouterLink>
        <RouterLink to="/frivillig">Frivillig</RouterLink>
        <RouterLink to="/historikk">Historikk</RouterLink>
        {/* <RouterLink to="/om">Om festivalen</RouterLink> */}
      </div>
    </>
  );
};

export default NavMenu;
