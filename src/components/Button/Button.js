import React from "react";

import styles from "./Button.css";

const Button = ({ children, asLink, linkProps, large, ...props }) => {
  const button = (
    <div
      className={styles.Button}
      style={{ padding: large ? "1rem 2rem" : "" }}
      {...props}
    >
      {children}
    </div>
  );
  return asLink ? (
    <a
      {...linkProps}
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      {button}
    </a>
  ) : (
    button
  );
};

export default Button;
