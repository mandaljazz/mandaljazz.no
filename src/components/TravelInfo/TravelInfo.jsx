import React from "react";

import { Link } from "../../components";
import styles from "./TravelInfo.css";

const TravelInfo = () => (
  <div id="reise" className={styles.TravelInfo}>
    <h1>Reise</h1>
    <p>
      Finn reisen til Mandaljazz med <Link href="https://entur.no">Entur</Link>.
    </p>
    {window.innerWidth > 375 ? (
      <div className={styles.EnturIframeWrapper}>
        <iframe
          title="Entur Widget"
          frameBorder="0"
          style={{
            display: "block",
            height: 480,
            width: "100%",
            alignSelf: "center",
          }}
          src="https://widget.entur.no?filters=bus%2Crail&amp;showResult=internal&amp;target=_target&amp;defaultLang=nob&amp;toName=Mandal&amp;toPlace=NSR%3AGroupOfStopPlaces%3A85&amp;toCoords=58.029357%2C7.460864"
        ></iframe>
      </div>
    ) : (
      <iframe
        title="Entur-widget mini"
        frameBorder="0"
        style={{ height: 45, width: "100%", maxWidth: 200 }}
        src="https://widget.en-tur.no/mini?label=Finn%20reiser%20til%20Mandal&amp;target=_target&amp;toName=Mandal&amp;toPlace=NSR%3AGroupOfStopPlaces%3A85&amp;toCoords=58.029357%2C7.460864"
      ></iframe>
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
