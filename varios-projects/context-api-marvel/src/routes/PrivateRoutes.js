import React, { useContext } from 'react'
import {BrowserRouter as Router, Route, Switch}
from "react-router-dom"
import DashBoard from '../pages/Dashboard';
import NavBarPrivate from '../components/NavBarPrivate';
import { AuthContext } from '../context/authContext';

const PrivateRoutes = () => {
    const { auth } = useContext(AuthContext);
    console.log(`Private ROutes : ${auth}`)
    return (
         <Router>
            { auth && <NavBarPrivate></NavBarPrivate> }
            <Route exact  path="/dashboard" component={DashBoard}></Route>
        </Router>
        
    )
}

export default PrivateRoutes;