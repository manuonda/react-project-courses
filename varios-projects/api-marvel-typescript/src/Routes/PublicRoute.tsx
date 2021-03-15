import React from 'react'
import  {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home';

const PublicRoutes: React.FC =() => {
     return (
         <Router>
             <Switch>
                 <Route path="/" exact component={Home}></Route>
             </Switch>
         </Router>
     )
}

export default PublicRoutes;