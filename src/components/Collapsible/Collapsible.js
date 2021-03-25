import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

import styles from "./Collapsible.css";

const Collapsible = ({ title, children }) => {
  const [height, setHeight] = useState(0);
  const isExpanded = height !== 0;

  return (
    <div>
      <button
        className={styles.Toggle}
        aria-expanded={isExpanded}
        onClick={() => setHeight(isExpanded ? 0 : "auto")}
      >
        <span>{title}</span>
        <span
          className={classnames(
            styles.Icon,
            "flippable",
            isExpanded ? "flipped" : ""
          )}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>

      <AnimateHeight duration={300} height={height}>
        <div className={styles.Content}>{children}</div>
      </AnimateHeight>
    </div>
  );
};
export default Collapsible;
