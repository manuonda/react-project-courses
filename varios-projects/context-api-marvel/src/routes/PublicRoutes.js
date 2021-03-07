import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Content from "../components/Content"
import {AuthContext} from '../context/authContext'

const PublicRoutes = () => {
  const {auth} = useContext(AuthContext);
  return (
    <>
      <Router>
        { !auth && <NavBar></NavBar>}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/:selected" component={Content}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default PublicRoutes;
