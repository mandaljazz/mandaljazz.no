import React from "react";

import { Link } from "../../components";
import styles from "./TravelInfo.css";

const TravelInfo = () => (
  <div className={styles.TravelInfo}>
    <h1>Reise</h1>
    <p>Finn reisen til Mandaljazz med Entur!</p>
    <iframe
      title="Entur Widget"
      frameBorder="0"
      style={{
        display: "block",
        height: "480px",
        width: "100%",
        minWidth: "200px",
        maxWidth: "500px"
      }}
      src="https://widget.en-tur.no/?target=_blank&amp;toName=Mandal&amp;toPlace=NSR%3AGroupOfStopPlaces%3A85&amp;toCoords=58.029357%2C7.460864"
      // TODO: Add default departure day
    />

    <p>
      Ellers kan du for eksempel reise med{" "}
      <Link href="https://lavprisekspressen.no/">Lavprisekspressen</Link>.
    </p>

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
