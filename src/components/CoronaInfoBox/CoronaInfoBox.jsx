import React from "react";

import styles from "./CoronaInfoBox.css";

const CoronaInfoBox = () => (
  <div className={styles.CoronaInfoBox}>
    <h3>Tiltak på Mandaljazz</h3>
    <ul>
      <li>
        Vi følger{" "}
        <a
          href="https://www.konsertarrangor.no/koronaviruset/2020/smittevernveileder-for-konserter-og-arrangementer-under-covid-19-utbruddet/"
          target="_blank"
          rel="noopener noreferrer"
        >
          smittevern-veilederen til Norske Konsertarrangører
        </a>
        . Dette gjelder blandt annet renhold, desinfisering og avstand mellom
        sitteplassene
      </li>
      <li>Håndspritsstasjoner på festivalområdet</li>
      <li>
        Bord og sitteplasser i festivalteltet vil bli desinfisert mellom hver
        konsert
      </li>
      <li>
        Maksimalt 100 publikummere per konsert for å kunne holde ansvarlig
        avstand
      </li>
      <li>Bord og stoler blir satt opp med 1m avstand mellom husstander</li>
      <li>Vi har nedskalert antall dager og konserter</li>
      <li>Grunnet reiserestriksjoner blir det i år en helnorsk line-up</li>
      <li>
        Vi ønsker kontaktløs betaling med kort i barene på festivalområdet
      </li>
      <li>
        Vi ber både frivillige og publikummere om å holde seg hjemme dersom de
        føler seg syke
      </li>
      <li>
        Publikum må registerere kontaktinfo ved billettkjøp og godta lagring av
        kontaktinfo for å kunne gjøre smittesporing i etterkant av festivalen.
        Informasjonen slettes 1 måned etter festivalslutt.
      </li>
    </ul>
  </div>
);

export default CoronaInfoBox;
