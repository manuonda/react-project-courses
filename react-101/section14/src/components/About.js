import React from 'react'
import {Route, BrowserRouter as Router,  Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function Library() {
    const { library } = useParams()
  
    return <h3>ID: {library}</h3>
  }

const About = () => {
    return (
        <>
         <Router>
         About
         <ul>
             <li> <Link to="/netflix">Netflix</Link></li>
             <li><Link to="/information">Information</Link></li>
         </ul>
        
         
         <Route path='/:library'>
         <Library></Library>
         </Route>
         
         </Router>
             
        </>
    )
}

export default About
