import React from "react";

import { ScrollToTopOnMount } from "../../components";
import collage from "../../assets/images/collage.jpg";
import styles from "./AboutPage.css";

const AboutPage = () => (
  <div className={styles.AboutPage}>
    <ScrollToTopOnMount />
    <img src={collage} alt="Collage" />
    <p>
      Jazzen viser oss at alt går an. Det er musikk for en mindre trangsynt
      verden, der annerledeshet og egenart er noe man feirer.
    </p>
    <p>
      Mandaljazz er en jazzfestival som finner sted på sommertid i Norges
      sørligste kystby, Mandal.
    </p>
    <h1>LITT HISTORIE</h1>
    <p>
      Festivalen gikk av stabelen for første gang sommeren 2014, men idéen om å
      arangere en jazzfestival oppsto allerede sommeren i forveien da tre
      kompiser fra Mandal satt på en pub og snakket i store ord, slik man ofte
      gjør på pub. Det var da en av dem kom til å foreslå at de skulle starte
      opp en festival i hjembyen, og heldigvis var ikke dette en av de idéene
      som ble glemt morgenen etter. Noen måneder senere hadde de tre kompisene
      samlet en gruppe venner og kjente til å begynne planleggingen av det som
      skulle bli Mandaljazz 2014.
    </p>
    <p>
      Inspirasjonen til å starte opp Mandaljazz kom av et ønske om å gjenopplive
      den magiske stemningen som mange husker fra Lørdagsjazz i Hestetroa og
      selvsagt på den nedlagte jazzfestivalen i Mandal. Selv om Mandal er en
      kulturell by med mange konserter i løpet av sommermånedene, var det
      absolutt rom for en jazzfestival, som både kunne sees på som et alternativ
      og som et supplement til resten av festlighetene.
    </p>
    <p>
      Mandaljazz er opptatt av å å tilby et program som viser bredden innen
      jazzsjangeren og gir særlig plass til unge, spennende artister i
      programmet. Dette kommer nok delvis at at festivalen har relativt unge
      arrangører til jazzfestival å være.
    </p>
    <p>
      Ved festivalslutt i debutåret 2014, kunne Mandaljazz vise til en rekke
      flotte konserter og festivalen ble lovprist både av publikum, presse og
      ikke minst av artistene; “...Det er på grunn av folk som dere at
      Musikk-Norge går framover. Stå på!”, ropte Mathias Eick da han var ferdig
      med sin konsert på Mandaljazz 2014. På samme scene hadde Marius Neset, Ola
      Kvernberg Trio og mange andre gitt publikum kjempegode opplevelser i løpet
      av de tre dagene festivalen varte.
    </p>
    <p>
      At Mandaljazz er drevet av stå-på vilje er helt riktig. Alt fra
      planlegging, til festival og etterarbeid blir gjort på frivillig
      engasjement. Under festivalens oppstart viste småby-ånden seg fra sin
      beste side og ivrige mandalitter kom løpende for å hjelpe til med
      festivalen. Det ble også inngått gode sponsoravtaler med lokale aktører og
      mange er med videre som støttespillere til årets festival.
    </p>
    <p>
      Engasjerte mennesker og gode tilbakemeldinger gjør at Mandaljazz om mulig
      er blitt enda mer motiverte til å levere en knallgod festivalopplevelse
      også i 2018.
    </p>
  </div>
);

export default AboutPage;
