import React from "react";
import ReactGA from "react-ga";

import { Link } from "../";

import styles from "./BuyTicketButton.css";

const BuyTicketButton = ({ ...props }) => {
  return (
    <div className={styles.BuyTicketButtonWrapper}>
      <Link
        className={styles.BuyTicketButton}
        href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2019"
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
      </Link>
    </div>
  );
};

export default BuyTicketButton;
