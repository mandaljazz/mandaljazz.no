import React from "react";

import { ScrollToTopOnMount } from "../../components";
import volunteers2018Img from "../../assets/images/frivillige-2018.jpg";
import volunteers2016Img from "../../assets/images/frivillige-2016.jpg";
import volunteers2014Img from "../../assets/images/frivillige-2014.jpg";
import promoVideo from "../../assets/videos/promo.mp4";
import styles from "./VolunteerPage.css";

const VolunteerPage = () => (
  <div className={styles.VolunteerPage}>
    <ScrollToTopOnMount />
    <h1>Være frivillig på Mandaljazz?</h1>
    <p>Vi trenger frivillige. Det er supergøy!</p>
    <img src={volunteers2018Img} alt="Frivilliggjengen 2018" />
    <img src={volunteers2016Img} alt="Frivilliggjengen 2016" />
    <img src={volunteers2014Img} alt="Frivilliggjengen 2014" />
    <video
      autoPlay
      playsInline
      muted
      style={{ width: "100%", height: "50%" }}
      loop
    >
      <source src={promoVideo} type="video/mp4" />
      Beklager, her skulle det egentlig vært en video, men nettleseren din
      støtter ikke innebygde videoer :(
    </video>
  </div>
);

export default VolunteerPage;
