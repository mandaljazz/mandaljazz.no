import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import styles from "./Link.css";

const HashLink = ({ children, ...props }) => {
  return (
    <Link {...props} className={styles.Link}>
      {children}
    </Link>
  );
};

export default HashLink;
