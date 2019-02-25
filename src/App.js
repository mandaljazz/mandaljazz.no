import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Headroom from "react-headroom";

import { BuyTicketButton, Footer, NavMenu } from "./components";
import {
  AboutPage,
  PracticalInfoPage,
  ProgramHistoryPage,
  NotFoundPage,
  SplashPage,
  VolunteerPage
} from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <>
              <Headroom style={{ zIndex: 10 }}>
                <NavMenu />
              </Headroom>
              <Switch location={location}>
                <Route exact path="/" component={SplashPage} />
                <Route exact path="/praktisk" component={PracticalInfoPage} />
                <Route exact path="/frivillig" component={VolunteerPage} />
                <Route exact path="/historikk" component={ProgramHistoryPage} />
                <Route exact path="/om" component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
              <BuyTicketButton />
              <Footer />
            </>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
