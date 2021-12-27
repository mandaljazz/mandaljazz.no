import React from "react";
// import SpotifyPlayer from "react-spotify-player";

import matroser from "../../assets/images/profile/matroser.png";
// import christmasJazzlaug from "../../assets/images/jazzlaug-julehatt.png";
import { Artists, ScrollToTopOnMount } from "../../components";
import { HTMLEntities } from "../../utils/stringUtils";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <img
        src={matroser}
        className={styles.Logo}
        alt="Matroser"
      />
      <h1 className={styles.HeaderText}>mandaljazz</h1>
      <p className={styles.SubHeader}>
        30. juni {HTMLEntities.ndash} 2. juli 2022
      </p>
    </header>
    <Artists />
    {/* <div style={{ margin: "0 auto", maxWidth: "95%", width: "500px" }}>
      <SpotifyPlayer uri="spotify:user:shenrik:playlist:3L0O7pHL2uLvlQV4qkiWnY" />
    </div> */}
  </div>
);

export default SplashPage;
