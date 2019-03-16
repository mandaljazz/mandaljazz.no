import React from "react";

import { Link } from "../../components";
import styles from "./TicketsInfo.css";

const TicketsInfo = () => (
  <div className={styles.TicketsInfo}>
    <h1 className="with-background">Billetter</h1>
    <p>
      Mandaljazz tilbyr enkeltbilletter, dagspass og festivalpass til publikum.
    </p>

    <h4>Hvordan får jeg tak i billetter?</h4>
    <p>
      Billetter kjøpes på{" "}
      <Link href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2019">
        TicketCo
      </Link>
      . Festivalpass byttes i festivalbånd ved inngang til konsert eller på
      standen i gågata.
    </p>

    <h4>Festivalpass og dagspass</h4>
    <p>Gir inngang til alle konserter.</p>

    <h4>Studenter og ungdom under 26 år</h4>
    <p>
      Mandaljazz tilbyr rabatterte billetter til studenter og ungdom under 26
      år. Studenter inkluderer også elever på videregående, ungdoms- og
      barneskoler.
    </p>

    <h4>Barn</h4>
    <p>Alle barn under 12 år går gratis på Mandaljazz.</p>

    <h4>Funksjonshemmede med ledsagerbevis</h4>
    <p>
      Innehavere av ledsagerbevis for funksjonshemmede gis gratis billett til
      sin ledsager.
    </p>

    <h4>Aldersgrenser</h4>
    <p>
      Alle konserter i <strong>Teltet</strong> har 18 års aldersgrense. Barn
      under 18 år har adgang i følge med voksen.
    </p>
  </div>
);

export default TicketsInfo;
