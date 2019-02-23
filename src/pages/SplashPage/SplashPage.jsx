import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import Bounce from "react-reveal/Bounce";
// import SpotifyPlayer from "react-spotify-player";

// import logo from "../../assets/images/jazzlaug.png";
// import promoVideo from "../../assets/videos/promo.mp4";
import { Artists, ScrollToTopOnMount } from "../../components";
import { HTMLEntities } from "../../utils/stringUtils.js";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      {/* <img src={logo} className={styles.Logo} alt="logo" /> */}
      <h1>mandaljazz</h1>
      <p className={styles.SubHeader}>27. {HTMLEntities.ndash} 29. juni 2019</p>
      <Bounce>
        <p>
          <em>Psst!</em> Akkurat nå har vi noen få Early Bird-festivalpass til
          rabattert pris.
        </p>
        <FontAwesomeIcon icon={faSmileWink} color="mediumseagreen" size="2x" />
      </Bounce>
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

    {/* <div style={{ padding: "1rem" }}>
      <SpotifyPlayer uri="spotify:user:shenrik:playlist:5S7NeIDOhxH7seAFUQpHCT" />
    </div> */}
  </div>
);

export default SplashPage;
