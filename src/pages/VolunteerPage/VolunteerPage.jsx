import React from "react";

import { Blockquote, Button, ScrollToTopOnMount } from "../../components";
import volunteers2018Img from "../../assets/images/frivillige-2018.jpg";
import volunteers2016Img from "../../assets/images/frivillige-2016.jpg";
import volunteers2014Img from "../../assets/images/frivillige-2014.jpg";
// import promoVideo from "../../assets/videos/promo.mp4";
import styles from "./VolunteerPage.css";
import { HTMLEntities } from "../../utils/stringUtils";

const VolunteerPage = () => (
  <div className={styles.VolunteerPage}>
    <ScrollToTopOnMount />
    <img src={volunteers2018Img} alt="Frivilliggjengen 2018" />
    {/* HashLink doesn't work well on mobile for this, weird.. Do it manually with .scrollIntoView() */}
    <div
      onClick={e => {
        document
          .getElementById("frivilligskjema")
          .scrollIntoView({ behavior: "smooth" });
      }}
      style={{ marginTop: "2rem", border: "none" }}
    >
      <Button large>Bli frivillig på Mandaljazz 2019!</Button>
    </div>
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
    <div id="frivilligskjema" />
    <iframe
      title="Frivilligskjema"
      src="https://docs.google.com/forms/d/e/1FAIpQLScCyYzI5qiN63YSyjv2OJxi6cAvVxRDXSU6k4oDWd-3x8gNdw/viewform?embedded=true"
      width="100%"
      height="1934"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Henter skjema...
    </iframe>
    <Blockquote person="Mari Marie (transport)" style={{ marginTop: 0 }}>
      For en mulighet til å bli kjent med masse forskjellige folk på kjøretur!
      Det å få tid i en bil med interessante, rare, sære, kule, kunstneriske,
      motiverende og hyggelige musikere er jo ikke noe man får hver dag. Og på
      veien for å hente artister kan du få litt pustetid og blæste noe musikk!
      Kjøretidene er ofte veldig greie som gjør at du er ledig under mange av
      konsertene. Og veldig mye mer chill fysisk hvis du ikke er så fan av å
      bære tungt eller stå lenge.
    </Blockquote>
    <p>Vi gleder oss til å møte deg :)</p>
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
