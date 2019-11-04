import React from "react";

import logo from "../../assets/images/logo.png";
import { ScrollToTopOnMount } from "../../components";
import styles from "./SplashPage.css";
import { HTMLEntities } from "../../utils/stringUtils";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <h1>
        <img src={logo} className={styles.Logo} alt="logo" />
      </h1>
      <p className={styles.SubHeader}>
        25.{HTMLEntities.ndash}28. juni 2020
      </p>
    </header>
  </div>
);

export default SplashPage;
