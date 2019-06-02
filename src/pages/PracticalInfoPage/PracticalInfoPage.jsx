import React from "react";

import {
  TravelInfo,
  TicketsInfo,
  AccomodationInfo,
  ScrollToTopOnMount,
  HashLink
} from "../../components";
import styles from "./PracticalInfoPage.css";

const PracticalInfoPage = () => (
  <div className={styles.PracticalInfoPage}>
    <ScrollToTopOnMount />
    <TravelInfo />
    <AccomodationInfo />
  </div>
);

export default PracticalInfoPage;
