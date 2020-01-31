import React from "react";
import { withRouter } from "react-router-dom";

import Artist from "./Artist";
import styles from "./Artists.css";
import artistData from "./data.json";

// - blend mode på grid-bilder: lighten, bruk hover til å se ordentlig. Flere grønnskjateringer.
// - større grid-items på desktop?
// - Bytte ut sirkel med diamantform?
// - Ensfargede SoMe
// - Fjerne logo fra NavMenu når på SplashPage, bli til NavMenu-item når man scroller
// - 48px klikkbar flate for mobil for linker og sånt
// - font-weight på NavMenu
// - swich fra col til row når man er på mobil, og expand vertikalt
// - gradient på bildet

class Artists extends React.Component {
  state = {
    activeId: null
  };

  componentDidMount() {
    if (this.props.location.hash !== this.state.activeId) {
      this.setState({ ...this.props.location.state });
    }
  }

  componentDidUpdate() {
    const newActiveId = this.props.location.hash.replace("#", "");
    if (newActiveId !== this.state.activeId) {
      this.setState({ activeId: newActiveId });
    }
  }

  toggleIsActive = id => {
    if (id === this.state.activeId) {
      this.props.history.push();
    } else {
      this.props.history.push(`#${id}`);
    }
  };

  render() {
    return (
      <div>
        <div className={styles.Artists}>
          {artistData.map(artist => {
            const { id, hideFromArtistList } = artist;
            if (hideFromArtistList) {
              return null;
            }
            return (
              <Artist
                artist={artist}
                key={id}
                isActive={this.state.activeId === id}
                otherIsActive={
                  this.state.activeId !== null && this.state.activeId !== id
                }
                toggleIsActive={this.toggleIsActive}
                id={id}
              />
            );
          })}
        </div>
        <p style={{ textAlign: 'center'}}>… og mange flere, da.</p>
      </div>
    );
  }
}

export default withRouter(Artists);
