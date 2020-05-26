import React from "react";
import ReactGA from "react-ga";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";

import styles from "./BuyTicketButton.css";

const BuyTicketButton = ({ ...props }) => {
  return (
    <div className={styles.BuyTicketButtonWrapper}>
      <NavLink
        className={styles.BuyTicketButton}
        to="/billetter"
        onClick={() =>
          ReactGA.event({
            category: "User",
            action: "Clicked Buy Ticket button",
          })
        }
        {...props}
      >
        {isMobile ? (
          "Billetter"
        ) : (
          <div>
            Kjøp
            <br />
            Billetter
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default BuyTicketButton;
