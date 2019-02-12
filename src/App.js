import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NavMenu } from "./components";
import { ProgramHistoryPage, NotFoundPage, SplashPage } from "./pages";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <>
              <NavMenu />
              <Switch location={location}>
                <Route exact path="/" component={SplashPage} />
                <Route exact path="/historikk" component={ProgramHistoryPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
