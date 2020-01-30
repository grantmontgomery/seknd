import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styles
import css from "./App.css";

//Components
import {
  Nav,
  Scheduler,
  Search,
  About,
  Contact,
  SignIn,
  Footer
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames={{
                  enter: `slideEnter ${css["slideEnter"]}`,
                  enterActive: `slideEnterActive ${css["slideEnterActive"]}`,
                  exit: `slideExit ${css["slideExit"]}`,
                  exitActive: `slideExitActive ${css["slideExitActive"]}`
                }}
              >
                <Switch location={location}>
                  <Route path="/" exact component={Search}></Route>
                  <Route path="/scheduler" component={Scheduler}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/contact" component={Contact}></Route>
                  <Route path="/signin" component={SignIn}></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        ></Route>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
