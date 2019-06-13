import React from "react";
import ReactGA from "react-ga";
import classNames from "classnames";

import logo from "../assets/images/logo.png";
import saxImg from "../assets/images/sax.png";
import pianistImg from "../assets/images/pianist.png";
import bassImg from "../assets/images/bass.png";
import { Button, CircledButton, ScrollToTopOnMount, Link } from "../components";
import splashPageStyles from "./SplashPage/SplashPage.css";
import styles from "./SpecificCityAdLandingPage.css";
import { HTMLEntities } from "../utils/stringUtils.js";

const SpecificCityAdLandingPage = ({
  city,
  tagLine,
  distanceFromMandalDescription,
  enturUrl
}) => (
  <div className={styles.SpecificCityAdLandingPage}>
    <div className={styles.ColoredBackground}>
      <ScrollToTopOnMount />
      <header
        className={splashPageStyles.Header}
        style={{ width: "100%", minHeight: "auto", paddingTop: "2rem" }}
      >
        <img src={logo} className={splashPageStyles.Logo} alt="logo" />
        <p className={splashPageStyles.SubHeader}>
          27.{HTMLEntities.ndash}29.{HTMLEntities.nonBreakingSpace}juni
        </p>
      </header>
      <div className={classNames(styles.Section, styles.SingleSection)}>
        <h2 style={{ marginTop: 0 }}>En snarjazztur til Mandal i sommer?</h2>
      </div>
      <div className={classNames(styles.Section, styles.SingleSection)}>
        <p style={{ fontSize: "1.5rem" }}>
          {tagLine ||
            "Tjuvstart sommerferien med jazz og streetfood i ekte Sørlandsidyll."}
        </p>
      </div>
      <div className={styles.Section}>
        <div>
          <img src={saxImg} alt="sax" />
        </div>
        <div>
          <p>
            Det er ikke så langt fra {city} til Mandal som du kanskje skulle tro{" "}
            {HTMLEntities.ndash}{" "}
            {distanceFromMandalDescription ||
              "bare en liten togtur og vipps så befinner du deg i Sørlandsperlen og jazzbyen Mandal"}{" "}
            som du kanskje allerede vet huser en av Norges beste jazzfestivaler.
            Det synes hvert fall vi!
          </p>
          <p>
            Sol, musikk, streetfood, eget jazzøl, kunst, telt, festivalbar,
            fantastisk stemning og et program av høy kvalitet! Vi anbefaler deg
            å ta en nærmere titt på programmet!
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem"
        }}
      >
        <CircledButton
          to="/billetter"
          onClick={() =>
            ReactGA.event({
              category: "User",
              action: `${city}: Clicked Buy Tickets button`
            })
          }
          style={{ margin: "0 7.5%" }}
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
          style={{ margin: "0 7.5%" }}
        >
          Årets
          <br />
          program
        </CircledButton>
      </div>
    </div>
    <div className={styles.Section}>
      <div>
        <p>
          Festivalen arrangeres i en bakgård omkranset av en møbelfabrikk fra
          1800-tallet, mikrobryggeri, keramikkverksted og for anledningen et
          stort jazztelt.
        </p>
        <p>
          Årets program fronter Nordisk jazz på sitt beste, med banebrytende
          artister som Kresten Osgood, Bendik Giske, Mette Rasmussen,
          soulkometen Fieh og den legendariske kulthelten, finske Jimi Tenor.
        </p>
        <p>
          Mandaljazz tilbyr overnatting på nyåpnede Mandal Hotel som ligger
          nøyaktig 78 meter fra festivalområdet, hvor man får rabatt på
          hotellrom ved kjøp av festivalpass til Mandaljazz. Ta kontakt med{" "}
          <Link href="https://mandalhotel.no">Mandal Hotel</Link> for mer info.
        </p>
      </div>
      <div>
        <img src={pianistImg} alt="pianist" />
      </div>
    </div>
    <div className={classNames(styles.Section, styles.SingleSection)}>
      <p>Reise miljøvennlig fra {city} til Mandal?</p>
      <Link
        href={
          enturUrl ||
          "https://en-tur.no/travel-result?stopId=NSR%3AGroupOfStopPlaces%3A85&amp;stopName=Mandal&amp;stopLabel=Mandal&amp;stopLat=58.029357&amp;stopLon=7.460864&amp;date=1561629600000&amp;transportModes=bus%2Ctram%2Crail%2Cmetro%2Cwater%2Cflytog%2Cflybuss&amp;fromWidget=true&amp;walkSpeed=1.3&amp;minimumTransferTime=120"
        }
        className="no-underline"
      >
        <Button>Finn kollektivreiser</Button>
      </Link>
    </div>
    <div className={classNames(styles.Section, styles.SingleSection)}>
      <h2>Vi sees til en fantastisk festival!</h2>
    </div>
    <img
      src={bassImg}
      alt="bass"
      style={{ maxHeight: "400px", margin: "5rem 0" }}
    />
  </div>
);

export default SpecificCityAdLandingPage;
