import React from "react";
import ReactGA from "react-ga";
import { isMobile } from "react-device-detect";

import styles from "./BuyTicketButton.css";

const BuyTicketButton = ({ ...props }) => {
  return (
    <div className={styles.BuyTicketButtonWrapper}>
      <a
        className={styles.BuyTicketButton}
        href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2021"
        rel="noopener noreferrer"
        target="_blank"
        onClick={() =>
          ReactGA.event({
            category: "User",
            action: "Clicked Buy Ticket button",
          })
        }
        {...props}
      >
        {isMobile ? (
          <div>
            Super
            <br />
            Early Merry
            <br />
            Christmas
            <br />
            Birds-
            <br />
            billetter
          </div>
        ) : (
          <div>
            Super
            <br />
            Early Merry
            <br />
            Christmas
            <br />
            Birds-
            <br />
            billetter
          </div>
        )}
      </a>
    </div>
  );
};

export default BuyTicketButton;
