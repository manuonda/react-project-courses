import React from 'react'
import {Route,Redirect, BrowserRouter as Router,  Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'


function Library(props) {
     
    let {library} = useParams();
    console.log(`library ${library}`);
            if(library === 'netflix') {
                return(
                    <div>
                        <p>Es Netflix  {library}</p>
                    </div>
                )
            } else{
                return <Redirect to='/about'></Redirect>
            }
    
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
