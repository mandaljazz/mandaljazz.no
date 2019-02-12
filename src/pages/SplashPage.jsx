import React from "react";

import logo from "../assets/images/jazzlaug.png";
import { BuyTicketButton } from "../components";
import { HTMLEntities } from "../utils/stringUtils.js";
import promoVideo from "../assets/videos/promo.mp4";

const SplashPage = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>mandaljazz</h1>
      <p style={{ fontWeight: 900, fontSize: "2rem" }}>
        27. {HTMLEntities.ndash} 29. juni 2019
      </p>
      <BuyTicketButton />
    </header>
    <video
      autoPlay
      playsInline
      muted
      style={{ width: "100%", height: "50%" }}
      loop
    >
      <source src={promoVideo} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
);

export default SplashPage;
