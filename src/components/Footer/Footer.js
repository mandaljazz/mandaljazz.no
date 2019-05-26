import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

import kulturraadetImg from "../../assets/images/sponsors/kulturraadet.png";
import mandalKommuneImg from "../../assets/images/sponsors/mandal-kommune.png";
import nordiskKulturfondImg from "../../assets/images/sponsors/nordisk-kulturfond.jpg";
import sorNorskJazzsenterImg from "../../assets/images/sponsors/sor-norsk-jazzsenter.png";
import vestAgderFylkeskommuneImg from "../../assets/images/sponsors/vest-agder-fylkeskommune.png";
import keychangeImg from "../../assets/images/sponsors/keychange.png";
import sparebankenSorImg from "../../assets/images/sponsors/sparebanken-sor.png";
import frifondImg from "../../assets/images/sponsors/frifond.png";
import { Link } from "../../components";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h2>Hovedsponsor</h2>
      <div className={classNames(styles.Sponsors, "large")}>
        <Link href="https://www.sor.no/" title="Sparebanken Sør">
          <img src={sparebankenSorImg} alt="Sparebanken Sør" />
        </Link>
      </div>
      <h2>Offentlig støtte</h2>
      <div className={styles.Sponsors}>
        <Link href="https://www.vaf.no/" title="Vest-Agder Fylkeskommune">
          <img src={vestAgderFylkeskommuneImg} alt="Vest-Agder Fylkeskommune" />
        </Link>
        <Link
          href="https://www.nordiskkulturfond.org/en"
          title="Nordisk kulturfond"
        >
          <img src={nordiskKulturfondImg} alt="Nordisk kulturfond" />
        </Link>
        <Link href="https://www.kulturradet.no/" title="Kulturrådet">
          <img src={kulturraadetImg} alt="Kulturrådet" />
        </Link>
        <Link
          href="https://sornorsk.jazzinorge.no/"
          title="Sør-Norsk Jazzsenter"
        >
          <img src={sorNorskJazzsenterImg} alt="Sør-Norsk Jazzsenter" />
        </Link>
        <Link href="https://www.mandal.kommune.no/" title="Mandal kommune">
          <img src={mandalKommuneImg} alt="Mandal kommune" />
        </Link>
        <Link href="https://www.frifond.no/" title="Frifond">
          <img src={frifondImg} alt="Frifond" />
        </Link>
        <Link href="https://keychange.eu/" title="Keychange">
          <img src={keychangeImg} alt="Keychange" />
        </Link>
      </div>
      <ul>
        <li>
          <Link
            href="https://www.facebook.com/mandaljazz"
            title="Mandaljazz på Facebook"
          >
            <FontAwesomeIcon icon={faFacebookSquare} color="#297a4d" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/mandaljazz/"
            title="Mandaljazz på Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} color="#36a065" />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/mandaljazz"
            title="Mandaljazz på Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} color="#47c17e" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/channel/UCk0E0CaIIwc15zF8QypCd4A"
            title="Mandaljazz på Youtube"
          >
            <FontAwesomeIcon icon={faYoutube} color="#6dce98" />
          </Link>
        </li>
      </ul>
      <div>
        <Link href="mailto:post@mandaljazz.no" title="post@mandaljazz.no">
          post@mandaljazz.no
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
