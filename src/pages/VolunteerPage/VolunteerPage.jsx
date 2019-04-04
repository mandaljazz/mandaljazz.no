import React from "react";

import { Blockquote, ScrollToTopOnMount } from "../../components";
import volunteers2018Img from "../../assets/images/frivillige-2018.jpg";
import volunteers2016Img from "../../assets/images/frivillige-2016.jpg";
import volunteers2014Img from "../../assets/images/frivillige-2014.jpg";
import promoVideo from "../../assets/videos/promo.mp4";
import styles from "./VolunteerPage.css";
import { HTMLEntities } from "../../utils/stringUtils";

const VolunteerPage = () => (
  <div className={styles.VolunteerPage}>
    <ScrollToTopOnMount />
    <h1 className="with-background">Være frivillig på Mandaljazz?</h1>
    <img src={volunteers2018Img} alt="Frivilliggjengen 2018" />
    <Blockquote person="Håvard (bar og servering)">
      Hadde det ikke vært for at man måtte okkupere den beste plassen i teltet,
      høre på det siste skriket innen jazz, omgås sprudlende fornøyde
      festivaldeltakere, catche opp med nye og gamle bekjente, servere de mest
      tålmodige av gjester, og å jobbe omringet av de mest fantastiske og
      entusiastiske folkene Norge har å by på {HTMLEntities.ndash} ja, så hadde
      det faktisk vært helt greit å jobbe i baren; det er nemlig ganske chill å
      tappe øl!
    </Blockquote>
    <img src={volunteers2016Img} alt="Frivilliggjengen 2016" />
    <Blockquote person="Marte (sjau og festivalområde)">
      Sjauen er en blanding av løfting og bæring og svette og snekring og en
      heil haug med dårlige vitser. På en bra måte! Derfor er sjau bare dritgøy.
    </Blockquote>
    <img src={volunteers2014Img} alt="Frivilliggjengen 2014" />
    <Blockquote person="Helga (billett og merch)">
      Som frivillig i billettcrewet blir du med i en gjeng med mye moro og godt
      samhold. Du blir kjent med masse kjekke folk og du kjenner at du bidrar
      med noe positivt for byen og nærmiljøet. Vi har mange forskjellige og
      gøyale oppgaver og ingen vakt er lik!
    </Blockquote>
    <Blockquote person="Mari Marie (transport)">
      For en mulighet til å bli kjent med masse forskjellige folk på kjøretur!
      Det å få tid i en bil med interessante, rare, sære, kule, kunstneriske,
      motiverende og hyggelige musikere er jo ikke noe man får hver dag. Og på
      veien for å hente artister kan du få litt pustetid og blæste noe musikk!
      Kjøretidene er ofte veldig greie som gjør at du er ledig under mange av
      konsertene. Og veldig mye mer chill fysisk hvis du ikke er så fan av å
      bære tungt eller stå lenge.
    </Blockquote>
    {/* <video
      autoPlay
      playsInline
      muted
      style={{ width: "100%", height: "50%" }}
      loop
    >
      <source src={promoVideo} type="video/mp4" />
      Beklager, her skulle det egentlig vært en video, men nettleseren din
      støtter ikke innebygde videoer :(
    </video> */}
  </div>
);

export default VolunteerPage;
