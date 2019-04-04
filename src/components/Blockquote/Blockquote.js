import React from "react";

import styles from "./Blockquote.css";
import { HTMLEntities } from "../../utils/stringUtils";

const Blockquote = ({ children, person, ...props }) => {
  return (
    <blockquote className={styles.Blockquote} {...props}>
      {children}
      <span className={styles.Person}>
        {HTMLEntities.mdash} {person}
      </span>
    </blockquote>
  );
};

export default Blockquote;
