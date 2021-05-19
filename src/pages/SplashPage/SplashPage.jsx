import React from "react";

import logo from "../../assets/images/profile/logo.png";
import matroser from "../../assets/images/profile/matroser.png";
import { Artists, ScrollToTopOnMount } from "../../components";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <img src={matroser} className={styles.Logo} alt="Matroser" />
      <img src={logo} className={styles.Logo} alt="Logo" />
    </header>
    <Artists />
  </div>
);

export default SplashPage;
