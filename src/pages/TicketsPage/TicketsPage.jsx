import React from "react";

import { ScrollToTopOnMount, TicketsInfo } from "../../components";
import styles from "./TicketsPage.css";

const TicketsPage = () => (
  <>
    <ScrollToTopOnMount />
    <div className={styles.TicketsPage}>
      {/* <iframe
        id="ticketco-iframe"
        title="ticketco-iframe"
        frameBorder={0}
        scrolling="no"
        src="https://ticketco.events/no/nb/widgets/events/88512?sections%5B%5D=tickets&amp;amp;flush=true"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
          fontSize: "1.5rem"
        }}
      >
        <Link href="https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2020">
          Mer info på TicketCo
        </Link>
      </div> */}
      <TicketsInfo />
    </div>
  </>
);

export default TicketsPage;
