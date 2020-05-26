import React from "react";

import { ScrollToTopOnMount, TicketsInfo } from "../../components";
import styles from "./TicketsPage.css";

const TicketsPage = () => (
  <>
    <ScrollToTopOnMount />
    <div className={styles.TicketsPage}>
      <TicketsInfo />
    </div>
  </>
);

export default TicketsPage;
