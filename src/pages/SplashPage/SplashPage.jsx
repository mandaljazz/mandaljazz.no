import React from "react";
import SpotifyPlayer from "react-spotify-player";

import logo from "../../assets/images/logo.png";
import promoVideo from "../../assets/videos/promo.mp4";
import { Artists, ScrollToTopOnMount } from "../../components";
import { HTMLEntities } from "../../utils/stringUtils.js";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <img src={logo} className={styles.Logo} alt="logo" />
      <p className={styles.SubHeader}>
        27.{HTMLEntities.ndash}29.{HTMLEntities.nonBreakingSpace}juni
      </p>
    </header>

    <Artists />

    <div style={{ width: "640px", maxWidth: "100%", margin: "2rem 0 4rem" }}>
      <SpotifyPlayer uri="spotify:user:shenrik:playlist:349CT4jdsoqVHb37gmWTEC" />
    </div>

    <video
      autoPlay
      playsInline
      muted
      style={{ width: "100%", marginBottom: "4rem" }}
      loop
    >
      <source src={promoVideo} type="video/mp4" />
      Beklager, her skulle det egentlig vært en video, men nettleseren din
      støtter ikke innebygde videoer :(
    </video>
  </div>
);

export default SplashPage;
