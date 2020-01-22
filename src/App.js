import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import { Nav } from "./components";
import { Search } from "./components";

const App = () => {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="slide"
              >
                <Switch>
                  <Route path="/" exact component={Search}></Route>
                  <Route path="/scheduler"></Route>
                  <Route></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        ></Route>
      </div>
    </Router>
  );
};

export default App;
