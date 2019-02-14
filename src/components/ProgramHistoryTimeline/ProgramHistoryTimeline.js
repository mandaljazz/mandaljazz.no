import React from "react";
import { Timeline, Event } from "react-timeline-scribble";
import SpotifyPlayer from "react-spotify-player";

import poster18 from "../../assets/images/poster-2018.png";
import poster17 from "../../assets/images/poster-2017.jpg";
import poster16 from "../../assets/images/poster-2016.jpg";
import poster15 from "../../assets/images/poster-2015.jpg";
import poster14 from "../../assets/images/poster-2014.jpg";
import styles from "./ProgramHistoryTimeline.css";
import { HTMLEntities } from "../../utils/stringUtils";

const ProgramHistoryTimeline = () => (
  <div className={styles.ProgramHistoryTimeline}>
    <Timeline>
      <Event interval={"2018"}>
        <div className={styles.Event}>
          <img src={poster18} className={styles.Poster} alt="Poster 2018" />
          <ul className={styles.EventList}>
            <li>Goran Kajfes Subtropic Arkestra</li>
            <li>Nils Økland Band</li>
            <li>Tortusa / Breistein {HTMLEntities.ampersand} Erlend Wichne</li>
            <li>M. Rexen's United Kingdoms</li>
            <li>Pom Poko</li>
            <li>Hegge</li>
            <li>Natalie Sandtorv</li>
            <li>Virgina Genta + Hans P. Kjorstad + Veslemøy Narvesen</li>
            <li>Henriette Eilertsen + Davide Vanzan</li>
            <li>One Out of Town + Brian Sandstrom</li>
            <li>Meg og Kammeraten Min</li>
            <li>Jooklo Duo</li>
            <li>Brian Sandstrom</li>
            <li>Sandstrom {HTMLEntities.ampersand} Kimestad</li>
            <li>Folkevogn</li>
            <li>Dark Roast</li>
            <li>Mandal Storband</li>
            <li>Bomfunk Mimosa</li>
            <li style={{ paddingTop: "1rem" }}>
              <SpotifyPlayer
                uri="spotify:user:shenrik:playlist:5S7NeIDOhxH7seAFUQpHCT"
                size="compact"
              />
            </li>
          </ul>
        </div>
      </Event>
      <Event interval={"2017"}>
        <div className={styles.Event}>
          <img src={poster17} className={styles.Poster} alt="Poster 2017" />
          <ul className={styles.EventList}>
            <li>
              Dele Sosimi {HTMLEntities.ampersand} Nye Lindesnes
              Afrobeatensemble
            </li>
            <li>Knut Riisnæs Kvartett</li>
            <li>Trondheim Jazzorkester {HTMLEntities.ampersand} Skrap</li>
            <li>Ola Kvernberg - Steamdome</li>
            <li>Stian Westerhus</li>
            <li>Pixel</li>
            <li>Rohey</li>
            <li>Christian Wallumrød Ensemble</li>
            <li>Torben Snekkestad (undervannskonsert)</li>
            <li>Kim Myhr</li>
            <li>Emile the Duke</li>
            <li>Natalie Sandtorv / Hans Hulbækmo</li>
            <li>Hästi + Frode Gjerstad</li>
            <li>Signe Emmeluth / Karl Bjorå</li>
            <li>Juno</li>
            <li>TUP (Talentutviklingsprogrammet)</li>
            <li>Lekerommet: Kyllingen som ikke kunne synge</li>
          </ul>
        </div>
      </Event>
      <Event interval={"2016"}>
        <div className={styles.Event}>
          <img src={poster16} className={styles.Poster} alt="Poster 2016" />
          <ul className={styles.EventList}>
            <li>Sun Ra Arkestra</li>
            <li>Scheen Jazzorkester</li>
            <li>Susanna</li>
            <li>Band of Gold</li>
            <li>Moskus m/Nils Økland</li>
            <li>Megalodon Collective</li>
            <li>Horse Orchestra</li>
            <li>The Magnetic Eagle / Den Magnetiske Ørn Hästi Trio</li>
            <li>Sørnorsk ungdomsstorband (SNUS)</li>
            <li>Barnekonsert: Klangbein</li>
            <li>Benjamin Dybesland Band</li>
          </ul>
        </div>
      </Event>
      <Event interval={"2015"}>
        <div className={styles.Event}>
          <img src={poster15} className={styles.Poster} alt="Poster 2015" />
          <ul className={styles.EventList}>
            <li>JøKleBa</li>
            <li>Trondheim Jazzorkester</li>
            <li>Elephant9 m/Reine Fiske</li>
            <li>Broen</li>
            <li>
              Bjørn Charles Dreyer - Åpningskonsert i Uranienborg fjellanlegg
            </li>
            <li>Albatrosh</li>
            <li>Kristoffer Lo - Inne i Ryvingen Fyr</li>
            <li>Hanna Pauslberg Concept</li>
            <li>Håkon Kornstad</li>
            <li>Dröm</li>
            <li>Mandal Storband</li>
            <li>SKRAP - Barnekonsert</li>
            <li>Body Rhythm Factory - Familiekonsert</li>
          </ul>
        </div>
      </Event>
      <Event interval={"2014"}>
        <div className={styles.Event}>
          <img src={poster14} className={styles.Poster} alt="Poster 2014" />
          <ul className={styles.EventList}>
            <li>Marius Neset "Birds"</li>
            <li>Ola Kvernberg Trio</li>
            <li>Mathias Eick Quintet</li>
            <li>Polkabjørn og Kleine Heine</li>
            <li>Dr. Kay and his Interstellar Tone Scientists</li>
            <li>Erik Kimestad Kvartett</li>
            <li>Yngve and his Boogie Legs</li>
            <li>Jazzfigur</li>
            <li>Mandal Storband</li>
            <li>Trygve Rypestøl</li>
            <li>Sarah Evelyn</li>
            <li>Saywhat</li>
            <li>Vice Versa</li>
          </ul>
        </div>
      </Event>
    </Timeline>
  </div>
);

export default ProgramHistoryTimeline;
