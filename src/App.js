import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Mobile from "./pages/mobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/mobile" component={Mobile} />
      </Switch>
    </Router>
  );
}

export default App;
