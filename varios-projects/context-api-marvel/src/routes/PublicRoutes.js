import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

const PublicRoutes = () => {
    return (
        <>
          <Switch>
             <Router>
              <Route  exact to="/" component={Login}></Route>   
            </Router>   
           </Switch>  
        </>
    )
}

export default PublicRoutes;
