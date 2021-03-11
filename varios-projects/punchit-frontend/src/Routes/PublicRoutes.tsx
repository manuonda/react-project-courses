import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import People from "../Pages/People";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/personas" component={People}></Route>
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
