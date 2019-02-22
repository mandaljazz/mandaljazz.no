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
      Kjøp
      <br />
      Early Bird-
      <br />
      pass
    </Link>
  );
};

export default BuyTicketButton;
