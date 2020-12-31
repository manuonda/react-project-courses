import React from  'react'
import { Route, BrowserRouter as Router} from 'react-router-dom'

import Home from '../views/Home'

export default function Routes (){
    return(
        <Router>
            <Route path="/" component={Home} />
        </Router>
    );
}
