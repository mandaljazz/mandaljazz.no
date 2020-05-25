import React from "react";

import { Link } from "../../components";
import styles from "./TicketsInfo.css";

const TicketsInfo = () => (
  <div id="billetter" className={styles.TicketsInfo}>
    <h1>Billetter</h1>
    <p>
      Mandaljazz tilbyr enkeltbilletter, dagspass og festivalpass til publikum.
    </p>

    <p>Billetter kommer snart for salg.</p>

    <p>
      I år vil vi legge ut et begrenset antall festivalpass, dagspass og
      enkeltbilletter. Det vil med våre tiltak være kapasitet til 100 mennesker
      i festivalteltet, hvorav noen plasser er avholdt til frivillige på
      festivalen.
    </p>

    <div className="info-box">
      <h3>Informasjon i forbindelse med korona</h3>
      <ul>
        <li>
          Ved avlysning som følge av opptrappet smitte eller forbud mot
          arrangementer, vil billetter refunderes
        </li>
        <li>
          Det er mulig å refundere billetter på grunn av sykdom eller karantene
        </li>
        <li>
          Publikum må registrere kontaktinfo ved billettkjøp og godta lagring av
          kontaktinfo for å kunne gjøre smittesporing i etterkant av festivalen.
          Informasjonen slettes 1 måned etter festivalslutt.
        </li>
      </ul>
    </div>

    <h3>Hvordan får jeg tak i billetter?</h3>
    <p>
      Billetter kan snart kjøpes på{" "}
      <Link href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2020">
        TicketCo
      </Link>
      .
    </p>

    <h3>Festivalpass og dagspass</h3>
    <p>Gir inngang til alle konserter den aktuelle dagen.</p>

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
