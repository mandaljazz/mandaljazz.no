import React from "react";
import ReactGA from "react-ga";

import logo from "../assets/images/logo.png";
import { Button, CircledButton, ScrollToTopOnMount, Link } from "../components";
import splashPageStyles from "./SplashPage/SplashPage.css";
import styles from "./SpecificCityAdLandingPage.css";
import { HTMLEntities } from "../utils/stringUtils.js";

const SpecificCityAdLandingPage = ({
  city,
  distanceFromMandalDescription,
  enturUrl
}) => (
  <div className={styles.SpecificCityAdLandingPage}>
    <ScrollToTopOnMount />
    <header className={splashPageStyles.Header}>
      <img src={logo} className={splashPageStyles.Logo} alt="logo" />
      <p className={splashPageStyles.SubHeader}>
        27.{HTMLEntities.ndash}29. juni
      </p>
    </header>
    <h1>Ta en snarjazztur til Mandal i sommer!</h1>
    <p>Tjuvstarte sommerferien med jazz og streetfood i ekte Sørlandsidyll?</p>
    <p>
      Det er ikke så langt fra {city} til Mandal som du kanskje skulle tro{" "}
      {HTMLEntities.ndash}{" "}
      {distanceFromMandalDescription || "bare en liten togtur og vipps så"}{" "}
      befinner du deg i Sørlandsperlen og jazzbyen Mandal. Sistnevnte
      beskrivelse er kanskje noe bare vi bruker, men hvis du ser på årets og
      foregående års program tror vi du vil si deg enig!
    </p>
    <p>
      Sol, musikk, streetfood, eget jazzøl, kunst, telt, festivalbar, fantastisk
      stemning og et program av høy kvalitet! Vi anbefaler deg å ta en nærmere
      titt!
    </p>
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-around" }}
    >
      <CircledButton
        to="/billetter"
        onClick={() =>
          ReactGA.event({
            category: "User",
            action: `${city}: Clicked Buy Tickets button`
          })
        }
      >
        Kjøp
        <br />
        billetter
      </CircledButton>
      <CircledButton
        to="/program"
        onClick={() =>
          ReactGA.event({
            category: "User",
            action: `${city}: Clicked See Program button`
          })
        }
      >
        Årets
        <br />
        program
      </CircledButton>
    </div>
    <p>
      Festivalen arrangeres i en bakgård omkranset av en møbelfabrikk fra
      1800-tallet, mikrobryggeri, keramikkverksted og for anledningen et stort
      jazztelt.
    </p>
    <p>
      Årets program fronter Nordisk jazz på sitt beste, med banebrytende
      artister som Kresten Osgood, Bendik Giske, Mette Rasmussen, soulkometen
      Fieh og den legendariske kulthelten, finske Jimi Tenor.
    </p>
    <Link
      href={
        enturUrl ||
        "https://en-tur.no/travel-result?stopId=NSR%3AGroupOfStopPlaces%3A85&amp;stopName=Mandal&amp;stopLabel=Mandal&amp;stopLat=58.029357&amp;stopLon=7.460864&amp;date=1561629600000&amp;transportModes=bus%2Ctram%2Crail%2Cmetro%2Cwater%2Cflytog%2Cflybuss&amp;fromWidget=true&amp;walkSpeed=1.3&amp;minimumTransferTime=120"
      }
    >
      <Button>Finn milijøvennlige reiser fra {city} til Mandal</Button>
    </Link>
    <p>
      Mandaljazz tilbyr overnatting på nyåpnede Mandal Hotel som ligger nøyaktig
      78 meter fra festivalområdet, hvor man får 15 % rabatt på overnatting ved
      kjøp av festivalpass til Mandaljazz.
    </p>
    <h2>Vi sees til en fantastisk festival!</h2>
  </div>
);

export default SpecificCityAdLandingPage;
