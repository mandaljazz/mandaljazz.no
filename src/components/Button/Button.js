import React from "react";

import styles from "./Button.css";

const Button = ({ children, asLink, linkProps, large, ...props }) => {
  const style = large ? { padding: "1rem 3rem", fontSize: "2rem" } : {};

  const button = (
    <div className={styles.Button} style={style} {...props}>
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
