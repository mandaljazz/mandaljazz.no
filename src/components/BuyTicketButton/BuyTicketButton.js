import React from "react";

import { Link } from "../";

import styles from "./BuyTicketButton.css";

const BuyTicketButton = ({ ...props }) => {
  return (
    <Link
      className={styles.BuyTicketButton}
      href="https://ticketco.no"
      {...props}
    >
      <div>Kjøp Early Bird-pass</div>
    </Link>
  );
};

export default BuyTicketButton;
