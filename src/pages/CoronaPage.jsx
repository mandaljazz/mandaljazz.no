import React from "react";

import { CoronaInfoBox, ScrollToTopOnMount } from "../components";
import styles from "./CoronaPage.css";
import trollImg from "../assets/images/profile/troll-transparent.jpg";

const CoronaPage = () => (
  <div className={styles.CoronaPage}>
    <ScrollToTopOnMount />
    <img src={trollImg} alt="Troll" style={{ margin: 'auto', maxWidth: "400px" }} />
    <h1>Koronainformasjon</h1>
    <h3>Det blir Mandaljazz i sommer!</h3>
    <p>
      Etter mange og nøye vurderinger har de frivillige i Mandaljazz tatt en
      demokratisk beslutning om at vi skal arrangere festival i år. Festivalen
      vil foregå 26. og 27. juni.
    </p>
    <p>
      Regjeringen har åpnet for arrangementer med inntil 200 personer fra 15.
      juni, og Mandaljazz tar alle forholdsregler når det kommer til smittevern.
      Det vil derfor bli en nedskalert utgave av festivalen denne
      korona-sommeren. Blant annet reduserer vi fra tre til to dager, det blir
      maks åpent for 100 publikummere på konsertene på hovedscenen i teltet på
      Kulturfabrikken, og det blir færre konserter enn det ville vært under
      normale omstendigheter. Det vil heller ikke bli noen aktivitet i regi av
      festivalen etter klokken 23.
    </p>
    <p>
      Mandaljazz følger smittevern-veilederen til Norske konsertarrangører og
      tar smittevern på høyeste alvor. Vi vil sørge for en trygg og god
      festivalopplevelse for publikum og gleder oss til å være blant de første
      arrangørene ut i en periode der kulturbransjen lider av tiltakene mot
      koronaviruset. En av de viktigste grunnene til at vi velger å gjennomføre
      årets festival er at vi vil være med på å hjelpe det norske kulturlivet
      tilbake til normalen.
    </p>
    <p>
      Ettersom reiserestriksjonene gjør det vanskelig for utenlandske artister å
      komme til Norge vil det i år bli en helnorsk lineup på Mandaljazz. Vi ser
      fram til å gi vårt trofaste publikum noe av det beste innen norsk jazz i
      2020.
    </p>
    <p>
      Fullt program vil være ute innen 25. mai, og da vil også billettene bli
      lagt ut for salg, naturligvis med en lavere pris på festivalpass grunnet
      nedskaleringen. (Dere som allerede har kjøpt festivalpass til full pris
      vil bli kontaktet så snart som mulig og få mulighet til å få refundert
      mellomlegget.)
    </p>
    <CoronaInfoBox />
    <p>
      Det er enda en liten stund til festivalen går av stabelen, og vi
      fortsetter å holde oss oppdaterte på situasjonen. Det kan derfor komme
      endringer med tanke på informasjon og smittevern. Vi holder alle våre
      festivalgjengere, frivillige og tilhengere oppdatert via både Facebook og
      nettsiden vår.
    </p>
  </div>
);

export default CoronaPage;
