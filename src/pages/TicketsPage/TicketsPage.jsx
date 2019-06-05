import React from "react";

import { Link, ScrollToTopOnMount, TicketsInfo } from "../../components";
import styles from "./TicketsPage.css";

const TicketsPage = () => (
  <>
    <ScrollToTopOnMount />
    <div className={styles.TicketsPage}>
      <iframe
        id="ticketco-iframe"
        title="ticketco-iframe"
        frameBorder={0}
        scrolling="none"
        width="100%"
        height="800px"
        src="//ticketco.events/no/nb/widgets/events/66323?sections%5B%5D=tickets&amp;amp;flush=true"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
          fontSize: "1.5rem"
        }}
      >
        <Link href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2019">
          Mer info på TicketCo
        </Link>
      </div>
      <TicketsInfo />
    </div>
  </>
);

export default TicketsPage;
