import React from "react";
import capitalize from "lodash/capitalize";
import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import dayjs from "dayjs";

import { HashLink } from "../";
import styles from "./Program.css";
import artists from "../Artists/data.json";

const Program = () => {
  return (
    <div className={styles.ProgramWrapper}>
      <div className={styles.Program}>
        {Object.entries(
          groupBy(sortBy(artists, "concertStartAt"), artist =>
            capitalize(dayjs(artist.concertStartAt).format("dddd"))
          )
        ).map(([day, artists]) => (
          <div key={day}>
            <h2 className="with-background">{day}</h2>
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
      </div>
    </div>
  );
};

export default Program;
