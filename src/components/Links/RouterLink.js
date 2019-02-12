import React from "react";
import { Link } from "react-router-dom";

import styles from "./Link.css";

const RouterLink = ({ children, ...props }) => {
  return (
    <Link {...props} className={styles.Link}>
      {children}
    </Link>
  );
};

export default RouterLink;
