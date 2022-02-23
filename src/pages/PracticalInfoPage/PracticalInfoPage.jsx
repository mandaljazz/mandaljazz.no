import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import {
  TravelInfo,
  AccomodationInfo,
  ScrollToTopOnMount,
  Link,
} from "../../components";
import styles from "./PracticalInfoPage.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaGFuc2hlbnJpayIsImEiOiJjaXpjdTc5a3AwMDhrMndwZW1ucWdkdXdwIn0.a15J4-cKGPIZClcvh-LeTQ",
});

const PracticalInfoPage = () => (
  <div className={styles.PracticalInfoPage}>
    <ScrollToTopOnMount />
    <Map
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v11"
      center={[7.457844, 58.025007]}
      zoom={[13]}
      containerStyle={{
        height: "50vh",
        width: "100%",
      }}
    >
      <Layer
        type="circle"
        id="marker"
        paint={{
          "circle-radius": 13,
          "circle-color": "#ffbd70",
          "circle-stroke-color": "#f98e11",
          "circle-stroke-width": 2,
          "circle-opacity": 0.9,
        }}
      >
        <Feature coordinates={[7.457844, 58.025007]} />
      </Layer>
    </Map>
    <p>
      <Link href="https://goo.gl/maps/faFwNkmTR28gCYRA6">
        <em>Keiser Nicolaus gate 8–12, 4515 Mandal</em>
      </Link>
    </p>
    <div className={styles.TextWidth}>
      <TravelInfo />
      <AccomodationInfo />
      <h1>Universell utforming</h1>
      <p>
        De fleste av konsertene skjer på vårt festivalområdet eller i vårt
        festivaltelt på Kulturfabrikken.
      </p>
      <p>
        Kulturfabrikken har to handicap-toaletter i første etasje. Det er
        montert rampe for å enkelt komme inn i bygget med rullestol. Utendørs i
        bakgården er det grus, så det kan kanskje være litt mer krevende å komme
        til med rullestol enn på asfalt eller andre underlag, men vi har alltid
        frivillige på jobb som kan bistå ved behov slik at rullestolbrukere fint
        skal komme seg inn i teltet eller rundt på området.
      </p>
      <p>
        Vi arrangerer også noen konserter i kulturhuset Buen. Her er det heis og
        handicap-toaletter.
      </p>
    </div>
  </div>
);

export default PracticalInfoPage;
