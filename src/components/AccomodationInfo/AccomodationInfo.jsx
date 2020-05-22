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
    <p className={"info-box"}>
      For tiden er det få ledige rom på byens hoteller, men Hald har ledige rom.
    </p>

    <ul className="link-list">
      <li>
        <Link href="https://www.booking.com/hotel/no/solborg-hotell">
          Solborg Sommerpensjonat
        </Link>
      </li>
      <li>
        <Link href="https://www.kjobmandsgaarden.no/">
          Kjøbmandsgården Hotell
        </Link>
      </li>
      <li>
        <Link href="https://sjosanden.no/">Sjøsanden Feriesenter</Link>
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
        <Link href="https://www.nordsjovegen.no/overnatting">
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

    <p>
      Det finnes også muligheter for privat innlosjering.{" "}
      <Link href="mailto:post@mandaljazz.no" title="post@mandaljazz.no">
        Kontakt oss
      </Link>{" "}
      hvis du er interessert i dette, så ser vi hva vi får til :)
    </p>
  </div>
);

export default AccomodationInfo;
