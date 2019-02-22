import React from "react";
import { Timeline, Event } from "react-timeline-scribble";
import SpotifyPlayer from "react-spotify-player";
import classNames from "classnames";

import horseOrchestraImg from "../../assets/images/horse-orchestra.jpg";
import theMaxxImg from "../../assets/images/the-maxx.jpg";
import styles from "./Artists.css";

// - blend mode på grid-bilder: lighten, bruk hover til å se ordentlig. Flere grønnskjateringer.
// - større grid-items på desktop?
// - Bytte ut sirkel med diamantform?
// - Ensfargede SoMe
// - Fjerne logo på SplashPage, bli til NavMenu-item når man scroller
// - 48px klikkbar flate for mobil for linker og sånt
// - font-weight på NavMenu
// - swich fra col til row når man er på mobil, og expand vertikalt
// - gradient på bildet

class Artists extends React.Component {
  state = {
    activeArtistId: null
  };

  toggleActiveArtist = id =>
    this.setState({
      activeArtistId: id === this.state.activeArtistId ? null : id
    });

  render() {
    return (
      <div className={styles.Artists}>
        <div
          className={classNames(styles.Artist, {
            active: this.state.activeArtistId === 1
          })}
          style={{ backgroundImage: `url(${horseOrchestraImg})` }}
          onClick={() => this.toggleActiveArtist(1)}
        >
          <h2>Horse Orchestra</h2>
          <div className={styles.ArtistInfo} onClick={e => e.stopPropagation()}>
            <img src={horseOrchestraImg} alt="Horse Orchestra" />
            <p>
              Horse Orchestra spilte på Mandaljazz i 2016, og i sommer kommer de
              tilbake for å gjenta suksessen! Horse Orchestra er et egenartet
              band der 20-tallets tradjazz mikses med 60-tallets frijazz, så vel
              som en essens av hiphop, moderne klassisk musikk og noise. Slik
              danner de sitt helt egne post-moderne lydunivers unikt for den
              nordiske jazzscene. Horse Orchestra er kjent for å være et band
              som burde oppleves live, med sin humoristiske stemning samtidig
              med en seriøs musisk utførelse på svært høyt nivå.
            </p>
            Bandet består av noen av Nordens mest spennende, unge jazzmusikere:
            <ul>
              <li>Erik Kimestad Pedersen (trompet)</li>
              <li>Ingimar Andersen (saksofon)</li>
              <li>Petter Hängsel (trombone)</li>
              <li>Kristian Tangvik (tuba)</li>
              <li>Jeppe Zeeberg (piano)</li>
              <li>Nicolai Kaas Claesson (bass)</li>
              <li>Rune Lohse (trommer)</li>
            </ul>
          </div>
        </div>
        <div
          className={classNames(styles.Artist, {
            active: this.state.activeArtistId === 2
          })}
          onClick={() => this.toggleActiveArtist(2)}
        >
          <h2>Mette Rasmussen kvintett</h2>
          <div className={styles.ArtistInfo} onClick={e => e.stopPropagation()}>
            <p>
              Den Trondheims-baserte danske saksofonisten Mette Rasmussen er et
              av de aller største talentene i nordisk jazz for tiden. Denne dama
              har intensitet, trøkk og energi i alt hun gjør enten det er når
              hun spiller på egenhånd eller med Trondheim Jazzorkester som også
              skal spille på Mandaljazz i sommer. Og trøkk må man ha når man
              stiller seg opp på scenen foran en heftig rytmeseksjon bestående
              av fire av Europas fremste frijazzere. Forvent deg nyskapende og
              spennende frijazz!
            </p>
            Bandet består av:
            <ul>
              <li>Mette Rasmussen (saksofon)</li>
              <li>Torbjörn Zetterberg (bass)</li>
              <li>Ingebrigt Håker Flaten (bass)</li>
              <li>Raymond Strid (trommer)</li>
              <li>Paul Lytton (trommer)</li>
            </ul>
          </div>
        </div>
        <div
          className={classNames(styles.Artist, {
            active: this.state.activeArtistId === 3
          })}
          style={{ backgroundImage: `url(${theMaxxImg})` }}
          onClick={() => this.toggleActiveArtist(3)}
        >
          <h2>Trondheim Jazzorkester + The MaXx</h2>
          <div className={styles.ArtistInfo} onClick={e => e.stopPropagation()}>
            <img src={theMaxxImg} alt="Trondheim Jazzorkester + The MaXx" />
            <p>
              De svenske jazzmusikerne Petter Kraft, Tomas Järmyr og Oscar
              Grönberg fikk tildelt SpareBank 1 SMN JazZtipendiat i 2017 for
              prosjektet «Trondheim Jazzorkester og The MaXx». Trioen er
              vanskelig å plassere stilmessig, men de beskriver musikken sin
              selv som «catchy riff-basert jazz-rock, med en konstant skiftende
              rytmisk karakter».
            </p>
            <p>
              Hele trioen tok sin utdanning på jazzlinja på NTNU i Trondheim, og
              har vært en del av jazzmiljøet der de siste ti årene. I sommer
              kommer de sammen med resten av Trondheim Jazzorkester til
              Mandaljazz, og dette er en konsert man virkelig kan glede seg til!
            </p>
            <h4>The MaXx</h4>
            <ul>
              <li>Oscar Grönberg (keyboards)</li>
              <li>Petter Kraft (gitar og saksofon)</li>
              <li>Tomas Järmyr (trommer)</li>
            </ul>
            <h4>Trondheim Jazz Orchestra</h4>
            <ul>
              <li>Mia Marlen Berg (vokal)</li>
              <li>Thomas Johansson (trompet)</li>
              <li>Petter Hängsel (trombone)</li>
              <li>Mette Rasmussen (saksofon)</li>
              <li>Kjetil Møster (saksofon)</li>
              <li>Anton Toorell (gitar)</li>
              <li>Anja Lauvdal (keyboard)</li>
              <li>Mattis Kleppen (bass)</li>
              <li>Tor Breivik (lyd)</li>
              <li>Jan Erik Holto (lys)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Artists;
