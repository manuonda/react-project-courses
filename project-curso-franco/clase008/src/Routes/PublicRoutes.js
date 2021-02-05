import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from '../pages/Login'

const PublicRoutes = () => {

    return (
        <Router>
          <Route path="/login" exact component={Login}></Route>
        </Router>
    )
}

export default PublicRoutes;