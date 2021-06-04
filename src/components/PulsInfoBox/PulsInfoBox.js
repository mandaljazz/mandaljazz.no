import React from "react";

import { Link } from "../";

import styles from "./PulsInfoBox.css";
import pulsLogoImg from "../../assets/images/sponsors/nordisk-kulturfond-puls-logo-white.png";

const PulsInfoBox = ({ artistName, ...props }) => {
  return (
    <div className={styles.PulsInfoBox} {...props}>
      <p>{artistName} er en del av vårt Puls-program.</p>
      <p>
        Puls er{" "}
        <Link href="https://www.nordiskkulturfond.org/en">
          Nordisk Kulturfonds
        </Link>{" "}
        treårige støtteprogram 2017-2019 som gir spillesteder og festivaler en
        unik mulighet til å arbeide fokuseret med nordisk livemusikk og
        presentere publikum for nordisk forankrede og lovende artister med
        internasjonalt potensiale.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <p>
          <Link href="https://puls.nordiskkulturfond.org/en/">
            Les mer om Puls
          </Link>
          .
        </p>
        <img src={pulsLogoImg} alt="Puls" />
      </div>
    </div>
  );
};

export default PulsInfoBox;
