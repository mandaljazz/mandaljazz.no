import React from "react";

import {
  TravelInfo,
  AccomodationInfo,
  ScrollToTopOnMount,
} from "../../components";
import styles from "./PracticalInfoPage.css";
import mapImg from "../../assets/images/kart.jpg";

const PracticalInfoPage = () => (
  <div className={styles.PracticalInfoPage}>
    <ScrollToTopOnMount />
    <TravelInfo />
    <AccomodationInfo />
    <h1>Festivalkart 2019</h1>
    <img src={mapImg} alt="Kart" style={{ width: "100%", marginTop: "1rem" }} />
  </div>
);

export default PracticalInfoPage;
