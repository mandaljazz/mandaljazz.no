import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Headroom from "react-headroom";

import {
  BuyTicketButton,
  Footer,
  NavMenu,
  PeekingSquirrel,
  Program,
  GoogleAnalyticsListener
} from "./components";
import {
  AboutPage,
  PracticalInfoPage,
  ProgramHistoryPage,
  NotFoundPage,
  SplashPage,
  ProgramPage,
  VolunteerPage,
  TicketsPage,
  JazzlaugsVennerPage,
  SpecificCityAdLandingPage,
  JazzMarketPage,
  SmåtassjazzPage
} from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GoogleAnalyticsListener>
          <Route
            render={({ location }) => (
              <>
                {!["stavanger", "kristiansand"].includes(
                  location.pathname.replace(/\//g, "")
                ) && (
                  <Headroom
                    style={{
                      zIndex: 10,
                      boxShadow:
                        "1px 1px 1px 0px var(--black-transparent-light)"
                    }}
                  >
                    <NavMenu />
                    <Program />
                  </Headroom>
                )}
                <Switch location={location}>
                  <Route exact path="/" component={SplashPage} />
                  <Route exact path="/praktisk" component={PracticalInfoPage} />
                  <Route exact path="/jazzmarked" component={JazzMarketPage} />
                  <Route
                    exact
                    path="/småtassjazz"
                    component={SmåtassjazzPage}
                  />
                  <Route exact path="/frivillig" component={VolunteerPage} />
                  <Route
                    exact
                    path="/historikk"
                    component={ProgramHistoryPage}
                  />
                  <Route exact path="/om" component={AboutPage} />
                  <Route exact path="/program" component={ProgramPage} />
                  <Route exact path="/billetter" component={TicketsPage} />
                  <Route
                    exact
                    path="/jazzlaugs-venner"
                    component={JazzlaugsVennerPage}
                  />
                  <Route
                    exact
                    path="/stavanger"
                    component={() => (
                      <SpecificCityAdLandingPage
                        city="Stavanger"
                        distandeFromMandalDescription="etter en 2,5 timers biltur"
                        enturUrl="https://en-tur.no/travel-result?stopId=NSR%3AGroupOfStopPlaces%3A85&amp;stopName=Mandal&amp;stopLabel=Mandal&amp;stopLat=58.029357&amp;stopLon=7.460864&amp;date=1561629600000&amp;transportModes=bus%2Ctram%2Crail%2Cmetro%2Cwater%2Cflytog%2Cflybuss&amp;fromWidget=true&amp;walkSpeed=1.3&amp;minimumTransferTime=120&amp;startLat=58.969391&amp;startLon=5.735101&amp;startId=NSR%3AGroupOfStopPlaces%3A8&amp;startLabel=Stavanger&amp;startName=Stavanger"
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/kristiansand"
                    component={() => (
                      <SpecificCityAdLandingPage
                        city="Kristiansand"
                        tagLine="Tjuvstart sommerferien med jazz og streetfood."
                        distanceFromMandalDescription="bare i underkant av en time med 200-bussen og vipps så befinner du deg i nabobyen"
                        enturUrl="https://en-tur.no/travel-result?stopId=NSR%3AGroupOfStopPlaces%3A85&amp;stopName=Mandal&amp;stopLabel=Mandal&amp;stopLat=58.029357&amp;stopLon=7.460864&amp;date=1561629600000&amp;transportModes=bus%2Ctram%2Crail%2Cmetro%2Cwater%2Cflytog%2Cflybuss&amp;fromWidget=true&amp;walkSpeed=1.3&amp;minimumTransferTime=120&amp;startLat=58.145304&amp;startLon=7.988857&amp;startId=NSR%3AGroupOfStopPlaces%3A9&amp;startLabel=Kristiansand&amp;startName=Kristiansand"
                      />
                    )}
                  />
                  <Route component={NotFoundPage} />
                </Switch>
                <PeekingSquirrel />
                {!["billetter", "stavanger", "kristiansand"].includes(
                  location.pathname.replace(/\//g, "")
                ) && <BuyTicketButton />}
                {!["jazzlaugs-venner", "stavanger", "kristiansand"].includes(
                  location.pathname.replace(/\//g, "")
                ) && <Footer />}
              </>
            )}
          />
        </GoogleAnalyticsListener>
      </BrowserRouter>
    );
  }
}

export default App;
