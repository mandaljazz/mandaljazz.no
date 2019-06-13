import React from "react";
import classNames from "classnames";

import styles from "./Link.css";

const Link = ({ children, skipTargetBlank, className, ...props }) => {
  const targetProps = skipTargetBlank
    ? {}
    : {
        rel: "noopener noreferrer",
        target: "_blank"
      };

  return (
    <a
      className={classNames(styles.Link, className)}
      {...props}
      {...targetProps}
    >
      {children}
    </a>
  );
};

export default Link;
