import React from "react";
import SpotifyPlayer from "react-spotify-player";

import logo from "../../assets/images/logo.png";
// import promoVideo from "../../assets/videos/promo.mp4";
import { Artists, ScrollToTopOnMount } from "../../components";
import { HTMLEntities } from "../../utils/stringUtils.js";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <img src={logo} className={styles.Logo} alt="logo" />
      {/* <h1>mandaljazz</h1> */}
      <p className={styles.SubHeader}>27.{HTMLEntities.ndash}29. juni</p>
    </header>

    <Artists />
    {/* <video
      autoPlay
      playsInline
      muted
      style={{ width: "100%", height: "50%" }}
      loop
    >
      <source src={promoVideo} type="video/mp4" />
      Beklager, her skulle det egentlig vært en video, men nettleseren din
      støtter ikke innebygde videoer :(
    </video> */}

    <div style={{ width: "640px", maxWidth: "100%" }}>
      <SpotifyPlayer uri="spotify:user:shenrik:playlist:349CT4jdsoqVHb37gmWTEC" />
    </div>
  </div>
);

export default SplashPage;
