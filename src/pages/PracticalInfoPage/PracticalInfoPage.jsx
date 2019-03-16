import React from "react";

import {
  TravelInfo,
  TicketsInfo,
  AccomodationInfo,
  ScrollToTopOnMount
} from "../../components";
import styles from "./PracticalInfoPage.css";

const PracticalInfoPage = () => (
  <div className={styles.PracticalInfoPage}>
    <ScrollToTopOnMount />
    <TravelInfo />
    <AccomodationInfo />
    <TicketsInfo />
  </div>
);

export default PracticalInfoPage;
