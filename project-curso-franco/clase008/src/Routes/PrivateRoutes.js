import {BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'

const PrivateRoutes = () => {
    return (
        <Router>
            <Route  exact path="/dashboard" component={Dashboard}></Route>
        </Router>
    )
}

export default PrivateRoutes
