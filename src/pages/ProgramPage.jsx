import React from "react";

import { Program, ScrollToTopOnMount } from "../components";

const ProgramPage = () => (
  <>
    <ScrollToTopOnMount />
    <Program isAlwaysOpen />
  </>
);

export default ProgramPage;
