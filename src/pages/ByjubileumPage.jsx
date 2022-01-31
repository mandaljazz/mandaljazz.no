import React from "react";

import { ScrollToTopOnMount } from "../components";
import styles from "./ByjubileumPage.css";
import byjubileumImg from "../assets/images/byjubileum.png";
import steinAustrudImg from "../assets/images/artists/stein-austrud.png";
import snusImg from "../assets/images/artists/snus.jpg";
import akmeeImg from "../assets/images/artists/akmee.jpg";
import barnekonsertImg from "../assets/images/artists/365-dager-i-et-ar.jpg";

const ByjubileumPage = () => (
  <div className={styles.ByjubileumPage}>
    <ScrollToTopOnMount />
    <img
      src={byjubileumImg}
      alt="Mandal by 100 år"
      style={{
        margin: "1rem auto",
        maxWidth: "400px",
        width: "100%",
      }}
    />
    <h1>Mandaljazz + Mandal by 100 år</h1>
    <h3>Byjubileet blir en sentral del av mandaljazz i 2022</h3>
    <p>
      mandaljazz kan nå med stor glede presentere fire konserter som skal
      gjennomføres i forbindelse med hundreårsjubileet av Mandal by. Årets
      utgave av festivalen foregår fra 30. juni til 2. juli.
    </p>
    <p>
      mandaljazz har allerede sluppet fire av artistene som skal spille på årets
      festival. I dag kan vi stolt presentere ytterligere fire, og felles for de
      er at de er lokale og at konsertene gjennomføres i et samarbeid med
      byjubileet. Da vi tok kontakt med jubileumskomiteen med ønske om å bidra
      til jubileet, møtte vi stor velvilje og optimisme. Festivalen har gjort
      forarbeidet ved å booke artistene og vil i tillegg stå for gjennomføringen
      av konsertene ved hjelp av våre frivillige. Dette er mandaljazz' gave til
      byjubileet.
    </p>
    <p>
      Jubileumskomiteen har for øvrig gått inn med midler for å bidra til at
      åpningskonserten med Stein Austrud blir en realitet. Vi gleder oss stort
      til å være med på feiringen av den flotte byen vår.
    </p>

    <p>
      Her er konsertene som vil markere byjubileet på mandaljazz, som for niende
      år på rad vil åpne mandalssommeren med musikkfestival i byen.
    </p>

    <h2>Stein Austrud – gratis åpningskonsert</h2>
    <img
      src={steinAustrudImg}
      alt="Stein Austrud"
      style={{ margin: "auto", width: "100%" }}
    />
    <p>
      Mangeårig musiker, komponist og produsent Stein Austrud har nylig sluppet
      en ny plate som har høstet strålende kritikk. Dette er et helt unikt
      prosjekt som markerer åpningen av mandaljazz 2022. Mandalitten Austrud har
      sitt studio på Skjernøy og bruker nærheten til havet som en viktig
      inspirasjon. Steins musikalske hjerte er der det organiske møter det
      elektroniske, der improvisasjonen møter klassisk, der du ikke definerer en
      sjanger, hvor du ikke teller men elsker puls.
    </p>
    <p>
      Mandal kammerkor, lokale musikere og flere andre bidragsytere fra Mandal
      vil medvirke. Det vil også bli en visuell produksjon med bruk av unike
      filmopptak fra byen og kysten, og det brukes lokale teknikere på lyd og
      lys.
    </p>
    <p>
      mandaljazz vil stå for produksjonen i sin helhet og sponser
      arbeidskraften, markedsføringen, det administrative og utstyr nødvendig
      for gjennomføringen av den kunstneriske produksjonen.
    </p>

    <h2>Akmee – en feiring av kulturhistorisk arv fra Øyslebø</h2>
    <img src={akmeeImg} alt="Akmee" style={{ margin: "auto", width: "100%" }} />
    <p>
      To historiske begivenheter, som hadde en stor innvirkning på våre liv,
      fant sted i år 2021; kommunesammenslåingen og Gurine Brunvatnes
      hundreårsjubileum. Hennes hengivne væren i verden samt den
      kulturhistoriske arven som videreføres gjennom hennes musikk, har
      inspirert trompetisten Erik Kimestad Pedersen til å komponere musikk til
      en jubileumskonsert. Bandet Akmee (Kjetil Jerve, Andreas Wildhagen, Erlend
      Olderskog Albertsen, Erik Kimestad Pedersen) henter inspirasjon fra
      pan-afrikanske kunstnergrupperinger i 60-talles USA, sørlandets menigheter
      og jazzens diasporiske karakter. Billetter legges snart ut for salg.
    </p>

    <h2>365 dager i et år – gratis barnekonsert</h2>
    <img
      src={barnekonsertImg}
      alt="365 dager i et år"
      style={{ margin: "auto", width: "100%" }}
    />
    <p>
      Hva får du når du kombinerer steppdans med elgitar? Det utforsker
      mandalitt Mari Marie Øinæs Nyvoll og gitarist Nicolai Gill Johannessen i
      barneforestillingen «365 dager i et år», som er produsert av Nyvoll. Her
      utforskes de ulike lydbildene man kan få gjennom denne spennende
      kombinasjonen. Forestillingen, som byr på en spennende, lærerik og
      engasjerende reise gjennom våre fire årstider, har ennå ikke hatt sin
      premiere, men skal spilles for skoleelever i Den kulturelle skolesekken i
      april. Som alltid vil barneforestillingen på mandaljazz være gratis.
    </p>

    <h2>SNUS – gratis storbandkonsert ved Hestetroa</h2>
    <img
      src={snusImg}
      alt="Sørnorsk Ungdomsstorband"
      style={{ margin: "auto", width: "100%" }}
    />
    <p>
      Sørnorsk ungdomsstorband har i flere år vært en viktig og populær
      gjenganger på mandaljazz - de har praktisk talt blitt et husband.
      Konserten som spilles ved Hestetroa sørger alltid for at restaurantgjester
      og forbipasserende får en ekstra hyggelig dag i byen vår. Sørnorsk
      Ungdomsstorband består av begavede musikere i alderen 16 til 20 år fra
      Agder, Vestfold og Telemark, som er regionen som Sørnorsk jazzsenter
      omfatter. Ingenting gjør seg så godt en sommerdag i sola som SNUS.
    </p>

    <p>
      Vi oppfordrer til å ta en kikk på mandaljazz.no for å lese om de øvrige
      artistene som er klare for årets festival. Flere artistslipp venter i
      tiden fremover.
    </p>
  </div>
);

export default ByjubileumPage;
