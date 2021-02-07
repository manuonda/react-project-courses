import React from 'react'
import {BrowserRouter as Router , 
        Route 
       } 
from 'react-router-dom'
import Login from '../pages/Login'


const PublicRoutes = () => {
    return (
        <>
             <Router>
              <Route  path="/" component={Login}></Route>   
            </Router>   
        </>
    )
}

export default PublicRoutes;
