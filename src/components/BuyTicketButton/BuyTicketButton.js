import React from "react";

import { Link } from "../";

import styles from "./BuyTicketButton.css";

const BuyTicketButton = ({ ...props }) => {
  return (
    <div className={styles.BuyTicketButtonWrapper}>
      <Link
        className={styles.BuyTicketButton}
        href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2019"
        {...props}
      >
        Kjøp
        <br />
        Early Bird-
        <br />
        pass
      </Link>
    </div>
  );
};

export default BuyTicketButton;
