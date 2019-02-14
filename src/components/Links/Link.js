import React from "react";

import styles from "./Link.css";

const Link = ({ children, skipTargetBlank, ...props }) => {
  const targetProps = skipTargetBlank
    ? {}
    : {
        rel: "noopener noreferrer",
        target: "_blank"
      };

  return (
    <a className={styles.Link} {...props} {...targetProps}>
      {children}
    </a>
  );
};

export default Link;
