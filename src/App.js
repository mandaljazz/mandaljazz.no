import React, { Component } from "react";

import logo from "./assets/images/jazzlaug.png";
import "./App.css";
import { HTMLEntities } from "./utils/stringUtils.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>MANDALJAZZ</h1>
          <h2>27. {HTMLEntities.ndash} 29. juni 2019</h2>
        </header>
      </div>
    );
  }
}

export default App;
