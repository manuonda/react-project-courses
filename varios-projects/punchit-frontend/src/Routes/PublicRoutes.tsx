import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

const PublicRoutes = () => {

  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route> 
      </Switch>
    </Router>
  );
};

export default PublicRoutes;