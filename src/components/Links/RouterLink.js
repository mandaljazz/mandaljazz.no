import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Link.css";

const RouterLink = ({ children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={styles.Link}
      activeClassName={styles.ActiveNavLink}
      exact
    >
      {children}
    </NavLink>
  );
};

export default RouterLink;
