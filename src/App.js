import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        {/* <Route path="/contact">
          <Contact />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
