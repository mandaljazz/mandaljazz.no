import React from "react";
import SpotifyPlayer from "react-spotify-player";

// import matroser from "../../assets/images/profile/matroser.png";
import christmasJazzlaug from "../../assets/images/jazzlaug-julehatt.png";
import { Artists, ScrollToTopOnMount } from "../../components";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <img src={christmasJazzlaug} className={styles.ChristmasLogo} alt="Jazzlaug" />
      <h1 className={styles.HeaderText}>mandaljazz</h1>
      <p>
        Takk for i år! Vi sees neste år{" "}
        <span role="img" aria-label="green heart">
          💚
        </span>
      </p>
    </header>
    <Artists />
    <div style={{ margin: "0 auto", maxWidth: "95%", width: "500px" }}>
      <SpotifyPlayer uri="spotify:user:shenrik:playlist:3L0O7pHL2uLvlQV4qkiWnY" />
    </div>
  </div>
);

export default SplashPage;
