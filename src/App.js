import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Headroom from "react-headroom";

import {
  BuyTicketButton,
  Footer,
  NavMenu,
  PeekingSquirrel,
  Program
} from "./components";
import withTracker from "./utils/withGoogleAnalyticsTracker";
import {
  AboutPage,
  PracticalInfoPage,
  ProgramHistoryPage,
  NotFoundPage,
  SplashPage,
  ProgramPage,
  VolunteerPage
} from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          render={({ location }) => (
            <>
              <Headroom style={{ zIndex: 10 }}>
                <NavMenu />
                <Program />
              </Headroom>
              <Switch location={location}>
                <Route exact path="/" component={withTracker(SplashPage)} />
                <Route
                  exact
                  path="/praktisk"
                  component={withTracker(PracticalInfoPage)}
                />
                <Route
                  exact
                  path="/frivillig"
                  component={withTracker(VolunteerPage)}
                />
                <Route
                  exact
                  path="/historikk"
                  component={withTracker(ProgramHistoryPage)}
                />
                <Route exact path="/om" component={withTracker(AboutPage)} />
                <Route
                  exact
                  path="/program"
                  component={withTracker(ProgramPage)}
                />
                <Route component={withTracker(NotFoundPage)} />
              </Switch>
              <PeekingSquirrel />
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
