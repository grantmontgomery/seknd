import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import { Nav, Scheduler } from "./components";
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
                  <Route path="/scheduler" component={Scheduler}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/contact" component={Contact}></Route>
                  <Route path="/sigin" component={SignIn}></Route>
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
