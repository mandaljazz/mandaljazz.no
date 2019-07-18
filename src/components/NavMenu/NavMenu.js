import React from "react";

import { RouterLink } from "../../components";
import styles from "./NavMenu.css";
import jazzlaugImg from "../../assets/images/jazzlaug.png";

const NavMenu = () => {
  return (
    <>
      <div className={styles.NavMenu}>
        <RouterLink to="/frivillig">Frivillig</RouterLink>
        <RouterLink to="/">
          <img src={jazzlaugImg} alt="Jazzlaug" style={{ height: "1.75rem" }} />
        </RouterLink>
        <RouterLink to="/historikk">Historikk</RouterLink>
      </div>
    </>
  );
};

export default NavMenu;
