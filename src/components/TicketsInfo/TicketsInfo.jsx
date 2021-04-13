import React from "react";

import { Button } from "../../components";
import styles from "./TicketsInfo.css";

const BuyTicketsButton = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      paddingTop: "2rem",
      fontSize: "1.5rem",
    }}
  >
    <Button
      asLink
      large
      linkProps={{
        href: "https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2021",
      }}
    >
      Kjøp billetter på TicketCo
    </Button>
  </div>
);

const TicketsInfo = () => (
  <div id="billetter" className={styles.TicketsInfo}>
    <h1>Billetter</h1>
    <p>
      <em>Billetter kommer for salg i mai.</em>
    </p>
    <p>
      Mandaljazz tilbyr enkeltbilletter, dagspass og festivalpass til publikum.
    </p>

    {/* <BuyTicketsButton /> */}

    <h3>Festivalpass</h3>
    <p>Gir inngang til alle konserter på hele festivalen.</p>

    <h3>Dagspass</h3>
    <p>Gir inngang til alle konserter den aktuelle dagen.</p>

    <h3>Enkeltbilletter</h3>
    <p>Gir inngang til den aktuelle konserten.</p>

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

    {/* <BuyTicketsButton /> */}
  </div>
);

export default TicketsInfo;
