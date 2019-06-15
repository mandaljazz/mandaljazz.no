import React from "react";
import classNames from "classnames";

import stoaImg from "../../assets/images/stoa.jpg";
import tonjeImg from "../../assets/images/tonje.jpg";
import helsebodenImg from "../../assets/images/helseboden.jpg";
import bodImg from "../../assets/images/bod.jpg";
import marketImg1 from "../../assets/images/jazzmarked.jpg";
import marketImg2 from "../../assets/images/jazzmarked-2.jpg";
import marketImg3 from "../../assets/images/jazzmarked-3.jpg";
import { ScrollToTopOnMount, Link } from "../../components";
import splashPageStyles from "../SplashPage/SplashPage.css";
import styles from "./JazzMarketPage.css";
import { HTMLEntities } from "../../utils/stringUtils.js";

const JazzMarketPage = () => (
  <div className={styles.JazzMarketPage}>
    <ScrollToTopOnMount />
    <header
      className={splashPageStyles.Header}
      style={{
        width: "100%",
        minHeight: "auto",
        paddingTop: "2rem"
      }}
    >
      <h1>Jazzmarked</h1>
      <p className={classNames(splashPageStyles.SubHeader)}>
        Lørdag{HTMLEntities.nonBreakingSpace}kl.{HTMLEntities.nonBreakingSpace}
        12
        {HTMLEntities.ndash}17
      </p>
    </header>
    <p>
      For første gang arrangerer vi vårt eget lille marked på festivalområdet
      vårt. Markedet vil være åpent fra kl. 12.00
      {HTMLEntities.ndash}17.00 lørdag 29. juni på Kulturfabrikken, og det er{" "}
      <span className={styles.HighlightedText}>gratis inngang</span> for alle
      som vil ta turen for å sjekke ut stemningen på festivalområdet!
    </p>
    <img src={marketImg1} alt="Jazzmarked 1" />
    <p>
      Markedet arrangeres samtidig som de to barnekonsertene, og derfor er barn
      også selvfølgelig velkomne på markedet. I den anledning har vi flere{" "}
      <span className={styles.HighlightedText}>fine aktiviteter for barn</span>,
      som blant annet ballspill, kubb, tegnestasjon og natursti. Det vil bli{" "}
      <span className={styles.HighlightedText}>salg av mat</span> på området som
      vi håper vil falle i smak hos både store og små.
    </p>
    <img src={marketImg3} alt="Jazzmarket 2" />
    <div className={styles.Section}>
      <div>
        <img src={stoaImg} alt="Støa" />
      </div>
      <p>
        I tillegg har vi fått tak i noen lokale aktører som skal stå i
        salgsboder i bakgården.
        <br />
        <br />
        <Link href="https://www.stoaleketoyfabrikk.no/">
          Støa Leketøyfabrikk
        </Link>{" "}
        kommer med tre-lekene sine til salgs, og tar også med seg en spennende
        aktivitet for barna der de kan være med å male sitt eget leketøy!
      </p>
    </div>
    <div className={styles.Section}>
      <p>
        <Link href="https://nb-no.facebook.com/Helseboden-358135680868894/">
          Helseboden
        </Link>{" "}
        er klar for Jazzmarked med miljøvennlige og bærekraftige produkter som
        er aktuelle både for voksne og barn.
      </p>
      <div>
        <img src={helsebodenImg} alt="Helseboden" />
      </div>
    </div>
    <div className={styles.Section}>
      <div>
        <img src={bodImg} alt="Merch-bod" />
      </div>
      <p>
        Det blir selvfølgelig en egen salgsbod der du får kjøpt deg årets
        hippeste <span className={styles.HighlightedText}>festival-merch</span>.
      </p>
    </div>
    <div className={styles.Section}>
      <p>
        <Link href="https://www.instagram.com/tonjesvensonpaus/">
          Keramiker Tonje Svenson Paus
        </Link>{" "}
        tar med seg sin kunst til salgs. Og kanskje dukker det opp noen flere
        aktører etter hvert. Hvem vet? Alt kan skje på Jazzmarked!
      </p>
      <div>
        <img src={tonjeImg} alt="Tonje Svenson Paus" />
      </div>
    </div>
    <h2>Vi sees på jazzmarkedet!</h2>
    <img src={marketImg2} alt="Jazzmarked" />
  </div>
);

export default JazzMarketPage;
