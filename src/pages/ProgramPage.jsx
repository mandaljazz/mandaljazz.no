import React from "react";

import { Program, ScrollToTopOnMount } from "../components";

const ProgramPage = () => (
  <div style={{ marginTop: "4rem" }}>
    <ScrollToTopOnMount />
    <Program isAlwaysOpen />
  </div>
);

export default ProgramPage;
