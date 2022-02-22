import React from "react";

import { Button, Link } from "../../components";
import styles from "./TicketsInfo.css";

// eslint-disable-next-line
const BuyTicketsButton = () => (
  <div
    style={{
      display: "flex",
      paddingTop: "2rem",
      fontSize: "1.5rem",
    }}
  >
    <Button
      asLink
      large
      linkProps={{
        href: "https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2022",
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
      Mandaljazz tilbyr enkeltbilletter, dagspass og festivalpass til publikum.
    </p>

    <BuyTicketsButton />

    <h3>Festivalpass og dagspass</h3>
    <p>Gir inngang til alle konserter.</p>

    <h3>Enkeltbilletter</h3>
    <p>Gir inngang til den aktuelle konserten.</p>
    <p style={{ marginTop: 0 }}>
      <em>
        Enkeltbilletter til konsertene i{" "}
        <Link href="https://www.buenkulturhus.no/">Buen Kulturhus</Link> selges
        via deres nettsider. Enkeltbilletter til alle andre konserter selges via{" "}
        <Link href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2022">
          TicketCo
        </Link>
        .
      </em>
    </p>

    <h3>Studenter og ungdom under 26 år</h3>
    <p>
      Mandaljazz tilbyr rabatterte billetter til studenter og ungdom under 26
      år. Studenter inkluderer også elever på videregående, ungdoms- og
      barneskoler.
    </p>

    <h3>Barnekonsert</h3>
    <p>
      Barn under 1 år går gratis på årets barnekonsert. Andre barn og voksne må
      kjøpe billett.
    </p>

    <h3>Funksjonshemmede med ledsagerbevis</h3>
    <p>
      Innehavere av ledsagerbevis for funksjonshemmede gis gratis billett til
      sin ledsager.
    </p>

    <h3>Annen info</h3>
    <ul>
      <li>
        Ved konserter i Elvesalen, Mandal Kino og Biblioteket, er det begrenset
        kapasitet. Innehavere av dags- og festivalpass bes møte tidlig for å
        sikre seg plass.
      </li>
      <li>Alle konserter starter presis.</li>
    </ul>

    <BuyTicketsButton />
  </div>
);

export default TicketsInfo;
