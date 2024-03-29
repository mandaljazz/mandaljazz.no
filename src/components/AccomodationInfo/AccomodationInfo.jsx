import React from "react";

import { Link } from "../../components";
import styles from "./AccomodationInfo.css";

const AccomodationInfo = () => (
  <div id="overnatting" className={styles.AccomodationInfo}>
    <h1>Overnatting</h1>
    <p>
      Det finnes flere overnattingsmuligheter i Mandal. Sjekk ut disse for mer
      info.
    </p>

    <ul className="link-list">
      <li>
        <Link href="https://www.kjobmandsgaarden.no/">
          Kjøbmandsgården Hotell
        </Link>
      </li>
      <li>
        <Link href="https://topcamp.no/nb/sjosanden">
          Sjøsanden Feriesenter
        </Link>
      </li>
      <li>
        <Link href="https://www.ferietun.no/">Sjøsanden Ferietun</Link>
      </li>
      <li>
        <Link href="https://tregdeferie.no/">Tregde Feriesenter</Link>
      </li>
      <li>
        <Link href="http://haldpensjonat.no/">Hald Pensjonat</Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/groups/147772328588662">
          Hatholmen Fyr
        </Link>
      </li>
      <li>
        <Link href="https://mandalhotel.no/">Mandal Hotell</Link>
      </li>
      <li>
        <Link href="http://www.ryvingensvenner.no/minorg/ryvenner/web.nsf/index?opennavigator">
          Ryvingen Fyr
        </Link>
      </li>
      <li>
        <Link href="https://www.airbnb.no/rooms/4373345">Arresten</Link>
      </li>
      <li>
        <Link href="https://www.airbnb.no/s/Mandal/homes?refinement_paths%5B%5D=%2Fhomes&allow_override%5B%5D=&checkin=2020-06-25&checkout=2020-06-28&s_tag=04tZdMNA">
          Airbnb
        </Link>
      </li>
    </ul>
  </div>
);

export default AccomodationInfo;
