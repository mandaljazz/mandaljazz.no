import React from "react";

import { Link } from "../../components";
import styles from "./TicketsInfo.css";

const TicketsInfo = () => (
  <div id="billetter" className={styles.TicketsInfo}>
    <h1>Billetter</h1>
    <p>Billetter kommer snart for salg.</p>

    <p>
      Mandaljazz tilbyr enkeltbilletter, dagspass og festivalpass til publikum.
    </p>

    <h3>Hvordan får jeg tak i billetter?</h3>
    <p>
      Billetter kan snart kjøpes på{" "}
      <Link href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2020">
        TicketCo
      </Link>
      .
    </p>
    <p>
      Festivalpass byttes til festivalbånd i billettbua på Kulturfabrikken eller
      på standen i Gågata.
    </p>
    <p>
      Hvis du trenger hjelp til å kjøpe billetter er det bare å spørre en av oss
      på standen i Gågata, så hjelper vi deg.
    </p>

    <h3>Festivalpass og dagspass</h3>
    <p>
      Gir inngang til alle konserter den aktuelle dagen, forutsett kapasitet.
    </p>

    <h3>Studenter og ungdom under 26 år</h3>
    <p>
      Mandaljazz tilbyr rabatterte billetter til studenter og ungdom under 26
      år. Studenter inkluderer også elever på videregående, ungdoms- og
      barneskoler.
    </p>

    <h3>Barn</h3>
    <p>Alle barn under 12 år går gratis på Mandaljazz.</p>

    <h3>Funksjonshemmede med ledsagerbevis</h3>
    <p>
      Innehavere av ledsagerbevis for funksjonshemmede gis gratis billett til
      sin ledsager.
    </p>

    <h3>Aldersgrenser</h3>
    <p>
      Alle konserter i <strong>Teltet</strong> har 18 års aldersgrense. Barn
      under 18 år har adgang i følge med voksen.
    </p>
  </div>
);

export default TicketsInfo;
