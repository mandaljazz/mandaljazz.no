import React from "react";

import lighthouse from "../../assets/images/profile/lighthouse-transparent.jpg";
import { Artists, CoronaInfoBox, ScrollToTopOnMount } from "../../components";
import styles from "./SplashPage.css";
import coronaInfoBoxStyles from "../../components/CoronaInfoBox/CoronaInfoBox.css";
import { HTMLEntities } from "../../utils/stringUtils";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <div>
        <img src={lighthouse} className={styles.Logo} alt="Lighthouse" />
      </div>
      <h1 className={styles.HeaderText}>mandaljazz</h1>
      <p className={styles.SubHeader}>26.{HTMLEntities.ndash}27. juni 2020</p>
    </header>
    <p>Joda – det blir festival i år!</p>
    <Artists />
    <div className={coronaInfoBoxStyles.CoronaInfoBoxWrapper}>
      <CoronaInfoBox />
    </div>
  </div>
);

export default SplashPage;
