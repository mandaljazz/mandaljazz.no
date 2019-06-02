import React from "react";
import ReactGA from "react-ga";
import { NavLink } from "react-router-dom";

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
            action: "Clicked Buy Ticket button"
          })
        }
        {...props}
      >
        Kjøp
        <br />
        billetter
      </NavLink>
    </div>
  );
};

export default BuyTicketButton;
