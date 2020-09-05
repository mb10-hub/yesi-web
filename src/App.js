import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutMe from "./components/aboutme";
import Home from "./components/Home";

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path="/home/:page?"
        render={(props) => <Home {...props} />}
      />
      <Route exact path="/aboutme" component={AboutMe} />
    </Switch>
  );
}
