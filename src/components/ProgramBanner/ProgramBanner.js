import React from "react";

import { HashLink } from "../";
import styles from "./ProgramBanner.css";

const ProgramBanner = () => {
  return (
    <div className={styles.ProgramBannerWrapper}>
      <div className={styles.ProgramBanner}>
        <div>
          <h4>Torsdag</h4>
          <ul>
            <li>
              <HashLink smooth to="/#tba-1">
                <span>17:00</span> | Åpningskonsert: TBA
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <h4>Fredag</h4>
        </div>
        <div>
          <h4>Lørdag</h4>
        </div>
      </div>
    </div>
  );
};

export default ProgramBanner;
