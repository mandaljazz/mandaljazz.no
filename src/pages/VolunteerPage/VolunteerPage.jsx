import React from "react";

import promoVideo from "../../assets/videos/promo.mp4";
import { Blockquote, ScrollToTopOnMount } from "../../components";
import volunteers2019Img from "../../assets/images/frivillige-2019.jpg";
import volunteers2018Img from "../../assets/images/frivillige-2018.jpg";
import volunteers2016Img from "../../assets/images/frivillige-2016.jpg";
import volunteers2014Img from "../../assets/images/frivillige-2014.jpg";
// import promoVideo from "../../assets/videos/promo.mp4";
import styles from "./VolunteerPage.css";
import { HTMLEntities } from "../../utils/stringUtils";

const VolunteerPage = () => (
  <div className={styles.VolunteerPage}>
    <ScrollToTopOnMount />
    <video autoPlay playsInline muted style={{ width: "100%" }} loop>
      <source src={promoVideo} type="video/mp4" />
      Beklager, her skulle det egentlig vært en video, men nettleseren din
      støtter ikke innebygde videoer :(
    </video>

    {/* HashLink doesn't work well on mobile for this, weird.. Do it manually with .scrollIntoView() */}
    {/* <div
      onClick={(e) => {
        document
          .getElementById("frivilligskjema")
          .scrollIntoView({ behavior: "smooth" });
      }}
      style={{ marginTop: "2rem", border: "none" }}
    >
      <Button large>Bli frivillig på Mandaljazz 2021!</Button>
    </div> */}
    <div style={{ padding: "1rem" }}>
      <h2>Bli frivillig på Mandaljazz 2021</h2>
      <p>Det blir snart mulig å melde seg som frivillig på Mandaljazz.</p>
      <p>
        Frem til det skjer kan du lese noen hva noen av de frivillge fra
        tidligere år har å si.
      </p>
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
    <img src={volunteers2019Img} alt="Frivilliggjengen 2019" />
    <Blockquote person="Marte (sjau og festivalområde)">
      Sjauen er en blanding av løfting og bæring og svette og snekring og en
      heil haug med dårlige vitser. På en bra måte! Derfor er sjau bare dritgøy.
    </Blockquote>
    <img src={volunteers2018Img} alt="Frivilliggjengen 2018" />
    <Blockquote person="Helga (billett og merch)">
      Som frivillig i billettcrewet blir du med i en gjeng med mye moro og godt
      samhold. Du blir kjent med masse kjekke folk og du kjenner at du bidrar
      med noe positivt for byen og nærmiljøet.
      <br />
      <br />
      Vi har mange forskjellige og gøyale oppgaver og ingen vakt er lik!
    </Blockquote>
    <img
      src={volunteers2016Img}
      alt="Frivilliggjengen 2016"
      style={{ marginBottom: "3rem" }}
    />
    <div id="frivilligskjema" />
    {/* <iframe
      id="volunteer-form"
      title="Frivilligskjema"
      src="https://docs.google.com/forms/d/e/1FAIpQLScCyYzI5qiN63YSyjv2OJxi6cAvVxRDXSU6k4oDWd-3x8gNdw/viewform?embedded=true"
      width="100%"
      height="2200"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Henter skjema...
    </iframe> */}
    <img src={volunteers2014Img} alt="Frivilliggjengen 2014" />
    <Blockquote person="Mari Marie (transport)">
      For en mulighet til å bli kjent med masse forskjellige folk på kjøretur!
      <br />
      <br />
      Det å få tid i en bil med interessante, rare, sære, kule, kunstneriske,
      motiverende og hyggelige musikere er jo ikke noe man får hver dag. Og på
      veien for å hente artister kan du få litt pustetid og blæste noe musikk!
      <br />
      <br />
      Kjøretidene er ofte veldig greie som gjør at du er ledig under mange av
      konsertene. Og veldig mye mer chill fysisk hvis du ikke er så fan av å
      bære tungt eller stå lenge.
    </Blockquote>
    <p>Vi gleder oss til å møte deg :)</p>
  </div>
);

export default VolunteerPage;
