import React from "react";
import classNames from "classnames";

import småtassjazzImg1 from "../../assets/images/småtassjazz.jpg";
import småtassjazzImg2 from "../../assets/images/småtassjazz-2.jpg";
import småtassjazzImg3 from "../../assets/images/småtassjazz-3.jpg";
import { ScrollToTopOnMount, RouterLink, HashLink } from "../../components";
import splashPageStyles from "../SplashPage/SplashPage.css";
import styles from "./SmåtassjazzPage.css";
import { HTMLEntities } from "../../utils/stringUtils.js";

const SmåtassjazzPage = () => (
  <div className={styles.SmåtassjazzPage}>
    <ScrollToTopOnMount />
    <header
      className={splashPageStyles.Header}
      style={{
        width: "100%",
        minHeight: "auto",
        paddingTop: "2rem"
      }}
    >
      <h1>Småtassjazz</h1>
      <p className={classNames(splashPageStyles.SubHeader)}>
        Lørdag{HTMLEntities.nonBreakingSpace}kl.{HTMLEntities.nonBreakingSpace}
        12
        {HTMLEntities.ndash}17
      </p>
    </header>
    <p>
      <span className={styles.HighlightedText}>Småtassjazz</span> er vår
      minifestival for de aller minste. Selv om det kan virke litt rart og
      skummelt og bråkete, er det jo egentlig meninga at jazz skal være gøy.
      Kanskje skjønner barn det bedre enn mange av oss voksne? Vi tror i hvert
      fall på at man godt kan tidlig krøkes, den som god krok skal bli. Lørdag
      formiddag presenterer vi dermed to artister som lager jazz for barn, og
      som vi tror åpner nysgjerrigheten til smårollingene for alt som er litt
      annerledes. Det er helt gratis å komme inn på barnekonsertene.
    </p>
    <img src={småtassjazzImg1} alt="Småtassjazz" />
    <p>
      <HashLink
        smooth
        to={{
          pathname: "/",
          hash: `#froy-aagre`,
          state: { activeId: "froy-aagre" }
        }}
      >
        Kling Klang med Frøy Aagre
      </HashLink>
      . Velkommen til en sanselig musikkopplevelse for de minste barna (0-3 år).
      Bli med Frøy Aagre og hennes saksofon på skattejakt etter spennende
      klanger! Frøy tar barna med på en musikalsk oppdagelsesferd og utforsker
      klangen på de ulike instrumentene. Etter forestillingen inviteres barna
      opp på scenen for å utforske og spille på instrumentene.
    </p>
    <img src={småtassjazzImg3} alt="Jazzmarket 2" />
    <p>
      <HashLink
        smooth
        to={{
          pathname: "/",
          hash: `#geitekillingen`,
          state: { activeId: "geitekillingen" }
        }}
      >
        «Geitekillingen som kunne telle til ti»
      </HashLink>
      . Anbefalt for de som er tre år og oppover. Geitekillingen vil gjerne vise
      barna hvor flink den er til å telle og hvor flinke Nils og Espen er til å
      spelle! Alf Prøysens historie «Geitekillingen som kunne telle til ti»
      fortelles gjennom sang og musikk, og ulike dyr kommer til uttrykk gjennom
      forskjellige lyder og sjangre. Nils spiller diverse fløyter, saksofoner og
      klarinetter, mens Espen forteller historien ved å spille på trommesett og
      andre perkusjonsinstrumenter.
    </p>
    <img src={småtassjazzImg2} alt="Jazzmarked" />
    <p>
      I tillegg til disse to barnekonsertene vil det også skje flere aktiviteter
      for barn under festivalens{" "}
      <RouterLink to="/jazzmarked">Jazzmarked</RouterLink> som foregår samme dag
      som barnekonsertene, i bakgården på Kulturfabrikken. Her blir det salg av
      mat for sultne festivaldeltakere i alle aldre. Vi får også besøk av flere
      aktører som står i markedsboder og selger varene sine. Blant annet kommer
      Støa Leketøysfabrikk med de fine treleketøyene sine, og har med seg utstyr
      slik at barna kan male og få hjelp til å sette sammen et eget treleketøy.
      Vi setter opp en tegnestasjon i bakgården, man kan delta på natur-sti og
      det settes frem kubb og diverse ballspill på gressplenen foran
      Kulturfabrikken. Vi planlegger en gøyal dag for alle barn fra 0 – 100 år!
    </p>
    <h2>Vi sees på småtassjazz!</h2>
  </div>
);

export default SmåtassjazzPage;
