import React from "react";

import { Button } from "../";
import styles from "./RoundedButton.css";

const RoundedButton = (props) => (
  <Button {...props} className={styles.RoundedButton} />
);

export default RoundedButton;
