import React from "react";

import logo from "../../assets/images/jazzlaug.png";
import { ScrollToTopOnMount } from "../../components";
import styles from "./SplashPage.css";
import { HTMLEntities } from "../../utils/stringUtils";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <div>
        <img src={logo} className={styles.Logo} alt="logo" />
      </div>
      <h1 className={styles.HeaderText}>
        mandaljazz
      </h1>
      <p className={styles.SubHeader}>
        25.{HTMLEntities.ndash}27. juni 2020
      </p>
    </header>
  </div>
);

export default SplashPage;
