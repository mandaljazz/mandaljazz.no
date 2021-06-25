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
      <img
        src={logo}
        className={styles.Logo}
        alt="Mandaljazz. 1.-3. juli 2021"
        style={{ marginTop: "2rem" }}
      />
    </header>
    <Artists />
    <iframe
      className="SpotifyPlayer"
      title="spotify"
      src="https://open.spotify.com/embed/playlist/3L0O7pHL2uLvlQV4qkiWnY"
      style={{ width: "380px", maxWidth: "95%" }}
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  </div>
);

export default SplashPage;
