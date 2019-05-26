import React from "react";

import { Link } from "../../components";
import styles from "./TravelInfo.css";

const TravelInfo = () => (
  <div id="reise" className={styles.TravelInfo}>
    <h1>Reise</h1>
    <p>Finn reisen til Mandaljazz med Entur!</p>
    {window.innerWidth > 350 ? (
      <iframe
        title="Entur Widget"
        frameBorder="0"
        style={{
          display: "block",
          height: "480px",
          width: "100%",
          maxWidth: "500px",
          alignSelf: "center"
        }}
        src="https://widget.en-tur.no/?target=_blank&amp;toName=Mandal&amp;toPlace=NSR%3AGroupOfStopPlaces%3A85&amp;toCoords=58.029357%2C7.460864"
        // TODO: Add default departure day
      />
    ) : (
      <iframe
        title="Entur-widget mini"
        frameBorder="0"
        style={{
          height: "45px",
          width: "100%"
        }}
        src="https://widget.en-tur.no/mini?target=_blank&amp;label=Finn%20reiser%20til%20Mandal&amp;toName=Mandal&amp;toPlace=NSR%3AGroupOfStopPlaces%3A85&amp;toCoords=58.029357%2C7.460864"
      />
    )}

    <p>
      Ellers kan du for eksempel reise med{" "}
      <Link href="https://lavprisekspressen.no/">Lavprisekspressen</Link>.
    </p>

    <p>
      Spørsmål om transport?{" "}
      <Link href="mailto:post@mandaljazz.no" title="post@mandaljazz.no">
        Kontakt oss
      </Link>{" "}
      gjerne!
    </p>
  </div>
);

export default TravelInfo;
