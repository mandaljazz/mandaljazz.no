import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ProgramHistoryPage from "./pages/ProgramHistoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import SplashPage from "./pages/SplashPage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <>
              <Link to="/">Hjem</Link>
              <Link to="/historikk">Historikk</Link>
              <TransitionGroup>
                {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={SplashPage} />
                    <Route
                      exact
                      path="/historikk"
                      component={ProgramHistoryPage}
                    />
                    <Route component={NotFoundPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
