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
      style="mapbox://styles/mapbox/light-v9"
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
          "circle-color": "#f89876",
          "circle-stroke-color": "#f1755b",
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
    <TravelInfo />
    <AccomodationInfo />
  </div>
);

export default PracticalInfoPage;
