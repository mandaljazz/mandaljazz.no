import React from "react";

import { RouterLink } from "../../components/Links";
import logo from "../../assets/images/jazzlaug.png";
import styles from "./NavMenu.css";

const NavMenu = ({ children, ...props }) => {
  return (
    <ul className={styles.NavMenuList}>
      <li>
        <RouterLink to="/">
          <img src={logo} alt="logo" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/historikk">Historikk</RouterLink>
      </li>
    </ul>
  );
};

export default NavMenu;
