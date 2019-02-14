import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "../../components";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul>
        <li>
          <Link
            href="https://www.facebook.com/mandaljazz"
            title="Mandaljazz på Facebook"
            skipTargetBlank
          >
            <FontAwesomeIcon icon={faFacebookSquare} color="royalblue" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/mandaljazz/"
            title="Mandaljazz på Instagram"
            skipTargetBlank
          >
            <FontAwesomeIcon icon={faInstagram} color="orange" />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/mandaljazz"
            title="Mandaljazz på Twitter"
            skipTargetBlank
          >
            <FontAwesomeIcon icon={faTwitter} color="deepskyblue" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/channel/UCk0E0CaIIwc15zF8QypCd4A"
            title="Mandaljazz på Youtube"
            skipTargetBlank
          >
            <FontAwesomeIcon icon={faYoutube} color="red" />
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
