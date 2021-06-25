import React from "react";
import SpotifyPlayer from "react-spotify-player";

import logo from "../../assets/images/profile/logo.png";
import matroser from "../../assets/images/profile/matroser.png";
import { Artists, ScrollToTopOnMount } from "../../components";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <img src={matroser} className={styles.Logo} alt="Matroser" />
      <img
        src={logo}
        className={styles.Logo}
        alt="Mandaljazz. 1.-3. juli 2021"
        style={{ marginTop: "2rem" }}
      />
    </header>
    <Artists />
    <div style={{ margin: "0 auto", maxWidth: "95%", width: "500px" }}>
      <SpotifyPlayer uri="spotify:user:shenrik:playlist:3L0O7pHL2uLvlQV4qkiWnY" />
    </div>
  </div>
);

export default SplashPage;
