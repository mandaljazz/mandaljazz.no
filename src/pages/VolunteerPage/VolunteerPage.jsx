import React from "react";
import { isMobile } from "react-device-detect";

import promoVideo from "../../assets/videos/promo.mp4";
import {
  Blockquote,
  Button,
  Collapsible,
  ScrollToTopOnMount,
} from "../../components";
import volunteers2019Img from "../../assets/images/frivillige-2019.jpg";
import volunteers2018Img from "../../assets/images/frivillige-2018.jpg";
import volunteers2016Img from "../../assets/images/frivillige-2016.jpg";
import volunteers2014Img from "../../assets/images/frivillige-2014.jpg";
import styles from "./VolunteerPage.css";
import { HTMLEntities } from "../../utils/stringUtils";

// HashLink doesn't work well on mobile for this, weird.. Do it manually with .scrollIntoView()
const ScrollToFormButton = () => (
  <div
    onClick={(e) => {
      document
        .getElementById("frivilligskjema")
        .scrollIntoView({ behavior: "smooth" });
    }}
    style={{ marginTop: "2rem", border: "none" }}
  >
    <Button large={!isMobile}>Meld deg som frivillig!</Button>
  </div>
);

const VolunteerPage = () => (
  <div className={styles.VolunteerPage}>
    <ScrollToTopOnMount />
    <video autoPlay playsInline muted style={{ width: "100%" }} loop>
      <source src={promoVideo} type="video/mp4" />
      Beklager, her skulle det egentlig vært en video, men nettleseren din
      støtter ikke innebygde videoer :(
    </video>
    <ScrollToFormButton />
    <div style={{ padding: "1rem", maxWidth: "720px" }}>
      <p>Hvilken frivilliggruppe vil du være med i?</p>
      <Collapsible title="Artistvertskap">
        <div>
          Som artistvert er du med på å gi artistene en hyggelig opplevelse på
          festivalen. Denne gjengen tar i mot artistene og sørger for at de får
          mat, drikke og svar på det de lurer på.
        </div>
      </Collapsible>
      <Collapsible title="Bar og servering">
        <div>
          Denne gjengen står i baren i teltet eller serverer mat på
          festivalområdet.
        </div>
      </Collapsible>
      <Collapsible title="Billett og merch">
        <div>Denne gjengen selger billetter og merch under festivalen.</div>
      </Collapsible>
      <Collapsible title="Foto/film">
        <div>
          Både før og under festivalen trenger vi fotografer og filmfotografer.
          Det er ønskelig med noe erfaring og interesse!
        </div>
      </Collapsible>
      <Collapsible title="Kokk">
        <div>
          Liker du å lage mat? Da kan du bli med å lage maten som serveres under
          festivalen, til både publikum, frivillige og artister.
        </div>
      </Collapsible>
      <Collapsible title="Kos og forpleining">
        <div>
          Denne gjengen sørger for at det er hyggelig å være frivillig. Det
          innebærer å lage mat til de frivillige, særlig i sjaueuka før
          festivalen, og arrangere hyggelige sosiale aktiviteter for de
          frivillige!
        </div>
      </Collapsible>
      <Collapsible title="Sjauing og område">
        <div>
          Denne gjengen har ansvar for å sette opp og rigge ned festivalteltet,
          gjøre festivalområdet fint, og rigge klart til festival. Bli med enten
          du er glad i løfte og bære, snekre, har estetisk sans, eller bare
          ønsker å være med i en hyggelig og sosial gjeng! Det er særlig behov
          for folk som har mulighet til å være med i uka før festivalen.
        </div>
      </Collapsible>
      <Collapsible title="Teknikk">
        <div>
          Som teknisk sjauer jobber man på scenen med rigging under lydprøver og
          konserter. Noe teknisk erfaring er ønskelig.
        </div>
      </Collapsible>
      <Collapsible title="Transport">
        <div>
          Bli med som sjåfør hvis du kan tenke deg å kjøre artister til og fra
          Kjevik, og frakte folk og utstyr rundt omkring. Du må ha førerkort,
          men trenger ikke nødvendigvis ha egen bil.
        </div>
      </Collapsible>
      <Collapsible title="Vakt">
        <div>
          Vaktene passer på at publikum og frivillige har det hyggelig og ikke
          bryter sjenkereglene, og har et ekstra øye for at avstandsregler og
          smittevern blir etterfulgt.
        </div>
      </Collapsible>
      <Blockquote person="Håvard (bar og servering)">
        Hadde det ikke vært for at man måtte okkupere den beste plassen i
        teltet, høre på det siste skriket innen jazz, omgås sprudlende fornøyde
        festivaldeltakere, catche opp med nye og gamle bekjente, servere de mest
        tålmodige av gjester, og å jobbe omringet av de mest fantastiske og
        entusiastiske folkene Norge har å by på {HTMLEntities.ndash} ja, så
        hadde det faktisk vært helt greit å jobbe i baren; det er nemlig ganske
        chill å tappe øl!
      </Blockquote>
      <img src={volunteers2019Img} alt="Frivilliggjengen 2019" />
      <Blockquote person="Marte (sjau og festivalområde)">
        Sjauen er en blanding av løfting og bæring og svette og snekring og en
        heil haug med dårlige vitser. På en bra måte! Derfor er sjau bare
        dritgøy.
      </Blockquote>
      <img src={volunteers2018Img} alt="Frivilliggjengen 2018" />
      <Blockquote person="Helga (billett og merch)">
        Som frivillig i billettcrewet blir du med i en gjeng med mye moro og
        godt samhold. Du blir kjent med masse kjekke folk og du kjenner at du
        bidrar med noe positivt for byen og nærmiljøet.
        <br />
        <br />
        Vi har mange forskjellige og gøyale oppgaver og ingen vakt er lik!
      </Blockquote>
    </div>
    <img
      src={volunteers2016Img}
      alt="Frivilliggjengen 2016"
      style={{ marginBottom: "3rem" }}
    />
    <div id="frivilligskjema" />
    <iframe
      id="volunteer-form"
      title="Frivilligskjema"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfckhDBZ8adOzk_XoDSeLtvj37KGexnRMI6lWKJR1xA19HOug/viewform?embedded=true"
      width="100%"
      height="2200"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Henter skjema…
    </iframe>
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
