import React from "react";

import { ScrollToTopOnMount } from "../components";
import jazzlaugsVennerImg from "../assets/images/sponsors/jazzlaugs-venner.png";

const JazzlaugsVennerPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "4rem",
    }}
  >
    <ScrollToTopOnMount />
    <div>
      <img
        src={jazzlaugsVennerImg}
        alt="Jazzlaugs venner"
        style={{ width: "350px", maxWidth: "100%" }}
      />
    </div>
    <ul>
      <li>Neumann Bygg</li>
      <li>Nødings delikatesse</li>
      <li>Aurebekk Gartneri</li>
      <li>Buen Kulturhus</li>
    </ul>
  </div>
);

export default JazzlaugsVennerPage;
