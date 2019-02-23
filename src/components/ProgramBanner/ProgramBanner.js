import React from "react";

import { HashLink } from "../";
import styles from "./ProgramBanner.css";

const ProgramBanner = () => {
  return (
    <div className={styles.ProgramBannerWrapper}>
      <div className={styles.ProgramBanner}>
        <div>
          <h4>Torsdag</h4>
        </div>
        <div>
          <h4>Fredag</h4>
          <ul>
            <li>
              <HashLink
                smooth
                to={{
                  pathname: "/",
                  hash: "#mette-rasmussen",
                  state: { activeId: "mette-rasmussen" }
                }}
              >
                <span>TBA</span> | Mette Rasmussen
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to={{
                  pathname: "/",
                  hash: "#horse-orchestra",
                  state: { activeId: "horse-orchestra" }
                }}
              >
                <span>TBA</span> | Horse Orchestra
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <h4>Lørdag</h4>
          <ul>
            <li>
              <HashLink
                smooth
                to={{
                  pathname: "/",
                  hash: "#the-maxx",
                  state: { activeId: "the-maxx" }
                }}
              >
                <span>TBA</span> | The MaXx + TJO
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramBanner;
