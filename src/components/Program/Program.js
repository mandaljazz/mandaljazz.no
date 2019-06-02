import React from "react";
import capitalize from "lodash/capitalize";
import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import dayjs from "dayjs";
import { SlideDown } from "react-slidedown";
import { isMobile } from "react-device-detect";
import "react-slidedown/lib/slidedown.css";

import { Button, HashLink, RouterLink } from "../";
import styles from "./Program.css";
import artists from "../Artists/data.json";

class Program extends React.Component {
  static defaultProps = {
    isAlwaysOpen: false
  };

  artistsToBeShown = artists.filter(artist => !artist.hideFromProgram);

  state = {
    isOpen: false
  };

  toggleIsOpen = () => this.setState({ isOpen: !this.state.isOpen });

  artistsGroupedByDay = () =>
    Object.entries(
      groupBy(sortBy(this.artistsToBeShown, "concertStartAt"), artist =>
        capitalize(dayjs(artist.concertStartAt).format("dddd"))
      )
    );

  renderToggleIsOpenButton = () => (
    <Button onClick={this.toggleIsOpen}>
      {this.state.isOpen ? "Lukk program" : "Program"}
    </Button>
  );

  renderLinkToProgramPage = () => (
    <RouterLink to="/program" style={{ fontWeight: 600 }}>
      Program
    </RouterLink>
  );

  renderArtistText = artist => {
    if (artist.hideFromArtistList) {
      return <strong>{artist.shortName || artist.name}</strong>;
    }
    return (
      <HashLink
        smooth
        to={{
          pathname: "/",
          hash: `#${artist.id}`,
          state: { activeId: artist.id }
        }}
      >
        <strong>{artist.shortName || artist.name}</strong>
      </HashLink>
    );
  };

  render() {
    const { isAlwaysOpen } = this.props;
    if (!isAlwaysOpen && isMobile) {
      return null;
    }

    return (
      <div className={styles.ProgramWrapper}>
        <SlideDown
          className={styles.Program}
          closed={!isAlwaysOpen && !this.state.isOpen}
          transitionOnAppear={false}
        >
          {this.artistsGroupedByDay().map(([day, artists]) => (
            <div key={day}>
              <h2>{day}</h2>
              <ul className={styles.ProgramList}>
                {sortBy(artists, "concertStartAt").map(artist => (
                  <li key={artist.id}>
                    <span className={styles.ConcertInfo}>
                      {dayjs(artist.concertStartAt).format("HH:mm")} @{" "}
                      {artist.venue}
                    </span>
                    {" / "}
                    <span className={styles.ArtistName}>
                      {this.renderArtistText(artist)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </SlideDown>
        {!isAlwaysOpen && this.renderToggleIsOpenButton()}
      </div>
    );
  }
}

export default Program;
