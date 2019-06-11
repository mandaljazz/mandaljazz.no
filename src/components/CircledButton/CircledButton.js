import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./CircledButton.css";

const CircledButton = ({ children, ...props }) => {
  return (
    <>
      <NavLink className={styles.CircledButton} {...props}>
        {children}
      </NavLink>
    </>
  );
};

export default CircledButton;
