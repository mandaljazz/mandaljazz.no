import React from "react";
import capitalize from "lodash/capitalize";
import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import dayjs from "dayjs";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import { HashLink } from "../";
import styles from "./Program.css";
import artists from "../Artists/data.json";

class Program extends React.Component {
  state = {
    isOpen: false
  };

  toggleIsOpen = () => this.setState({ isOpen: !this.state.isOpen });

  renderToggleIsOpenButton = () => (
    <div onClick={this.toggleIsOpen} className={styles.OpenProgramButton}>
      {this.state.isOpen ? "Lukk" : "Se"} program
    </div>
  );

  render() {
    return (
      <div className={styles.ProgramWrapper}>
        <SlideDown className={styles.Program} closed={!this.state.isOpen}>
          {Object.entries(
            groupBy(sortBy(artists, "concertStartAt"), artist =>
              capitalize(dayjs(artist.concertStartAt).format("dddd"))
            )
          ).map(([day, artists]) => (
            <div key={day}>
              <h4 className="with-background">{day}</h4>
              <ul className={styles.ProgramList}>
                {sortBy(artists, "concertStartAt").map(artist => (
                  <li key={artist.id}>
                    <span className={styles.ConcertInfo}>
                      {dayjs(artist.concertStartAt).format("HH:mm")} @{" "}
                      {artist.venue}
                    </span>
                    {" / "}
                    <span className={styles.ArtistName}>
                      {artist.hideFromArtistList ? (
                        <strong>{artist.shortName || artist.name}</strong>
                      ) : (
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
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </SlideDown>
        {this.renderToggleIsOpenButton()}
      </div>
    );
  }
}

export default Program;
