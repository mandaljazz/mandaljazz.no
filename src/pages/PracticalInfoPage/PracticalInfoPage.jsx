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
    <div className={styles.NavMenu}>
      <HashLink
        smooth
        to={{
          pathname: "/praktisk",
          hash: "#reise"
        }}
      >
        <strong>Reise</strong>
      </HashLink>
      <HashLink
        smooth
        to={{
          pathname: "/praktisk",
          hash: "#overnatting"
        }}
      >
        <strong>Overnatting</strong>
      </HashLink>
      <HashLink
        smooth
        to={{
          pathname: "/praktisk",
          hash: "#billetter"
        }}
      >
        <strong>Billetter</strong>
      </HashLink>
    </div>
    <ScrollToTopOnMount />
    <TravelInfo />
    <AccomodationInfo />
    <TicketsInfo />
  </div>
);

export default PracticalInfoPage;
