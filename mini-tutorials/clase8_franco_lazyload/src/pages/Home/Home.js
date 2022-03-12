import React, { useContext } from 'react'
import context from 'react-bootstrap/esm/AccordionContext';
import { Link } from 'react-router-dom';
import { UserContext} from '../../context/usuario';


export const Home = () => {

  const contextUsuario =  useContext(UserContext);
  console.log( contextUsuario);
  
  return (
   <>
    <div>Home</div>
    <Link to="/tickets">Go to tickets</Link>
   </>
  )
  
}
export default Home;
