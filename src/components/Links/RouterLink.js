import React from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Link.css";

const RouterLink = ({ children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={classnames(styles.Link, styles.NavLink)}
      activeClassName={styles.ActiveNavLink}
      exact
    >
      {children}
    </NavLink>
  );
};

export default RouterLink;
