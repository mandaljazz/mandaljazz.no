import React from "react";

import { Link } from "../../components";
import styles from "./TravelInfo.css";

const TravelInfo = () => (
  <div className={styles.TravelInfo}>
    <h1>Reise</h1>
    <p>
      Hvordan kommer du deg til festivalen, lurer du? Finn din reise med Entur!
    </p>
    <iframe
      title="Entur Widget"
      frameBorder="0"
      style={{
        display: "block",
        height: "480px",
        width: "100%",
        minWidth: "400px",
        maxWidth: "500px"
      }}
      src="https://widget.en-tur.no/?target=_blank&amp;toName=Mandal&amp;toPlace=NSR%3AGroupOfStopPlaces%3A85&amp;toCoords=58.029357%2C7.460864"
      // TODO: Add default departure day
    />

    <p>
      Spørsmål om transport?{" "}
      <Link href="mailto:post@mandaljazz.no" title="post@mandaljazz.no">
        Kontakt oss
      </Link>{" "}
      gjerne :)
    </p>
  </div>
);

export default TravelInfo;
