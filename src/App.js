import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BuyTicketButton, Footer, NavMenu } from "./components";
import { ProgramHistoryPage, NotFoundPage, SplashPage } from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/mandaljazz.no">
        <Route
          render={({ location }) => (
            <>
              <BuyTicketButton />
              <NavMenu />
              <div style={{ height: "4.5rem" }} />
              <Switch location={location}>
                <Route exact path="/" component={SplashPage} />
                <Route exact path="/historikk" component={ProgramHistoryPage} />
                <Route component={NotFoundPage} />
              </Switch>
              <Footer />
            </>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
