import React, { Component } from "react";

import logo from "./assets/images/jazzlaug.png";
import BuyTicketButton from "./components/BuyTicketButton";
import "./App.css";
import { HTMLEntities } from "./utils/stringUtils.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>mandaljazz</h1>
          <p style={{ fontWeight: 900, fontSize: "2rem" }}>
            27. {HTMLEntities.ndash} 29. juni 2019
          </p>
          <BuyTicketButton />
        </header>
      </div>
    );
  }
}

export default App;
