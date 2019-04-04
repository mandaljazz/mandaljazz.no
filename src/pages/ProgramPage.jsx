import React from "react";

import { Program, ScrollToTopOnMount } from "../components";

const ProgramPage = () => (
  <Program isAlwaysOpen>
    <ScrollToTopOnMount />
  </Program>
);

export default ProgramPage;
