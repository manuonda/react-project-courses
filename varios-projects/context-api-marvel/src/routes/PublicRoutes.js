import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import Series from "../pages/Series";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";

const PublicRoutes = () => {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/series" component={Series}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default PublicRoutes;
