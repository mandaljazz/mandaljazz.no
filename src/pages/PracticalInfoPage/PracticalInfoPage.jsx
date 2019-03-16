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
        Reise
      </HashLink>
      <HashLink
        smooth
        to={{
          pathname: "/praktisk",
          hash: "#overnatting"
        }}
      >
        Overnatting
      </HashLink>
      <HashLink
        smooth
        to={{
          pathname: "/praktisk",
          hash: "#billetter"
        }}
      >
        Billetter
      </HashLink>
    </div>
    <ScrollToTopOnMount />
    <TravelInfo />
    <AccomodationInfo />
    <TicketsInfo />
  </div>
);

export default PracticalInfoPage;
