import React from "react";

import { TravelInfo, AccomodationInfo } from "../../components";
import styles from "./PracticalInfoPage.css";

const PracticalInfoPage = () => (
  <div className={styles.PracticalInfoPage}>
    <TravelInfo />
    <AccomodationInfo />
  </div>
);

export default PracticalInfoPage;
