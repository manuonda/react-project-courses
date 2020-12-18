
import React, { useEffect} from 'react';
import { useLocation } from 'react-router-dom'

import {spotifyAuthCall} from '../../utils'

import imageHome from '../../assets/images/pngwing.com.png'

import "./style.css"

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&scope=user-read-private` 

const Home : React.FC = () => {
   const location = useLocation();
   console.log(location); 
   
    async function authenticateUser(spotifyCode) {
      const result = await spotifyAuthCall(spotifyCode);

    }
   useEffect(() =>{
     const urlParams = new URLSearchParams(location.search)
     console.log(urlParams)
     const spotifyCode = urlParams.get("code"); 
     console.log(spotifyCode);
     authenticateUser(spotifyCode); 
    },[location.search]);


   // funcion que permite redireccionar a la pagina de Spotify
  const handleLogin = () =>{
     window.location.replace(spotifyUrl);
  }
   
  return (
     <div className="home-container">
       <div className="home-left-child">
         <h3>Bienvenido</h3>
         <h6>Identificate a tu musica favorita</h6>
         <button onClick={handleLogin}>Iniciar Session</button>
       </div>
       <div className="home-rigth-child"
         style={{backgroundImage: `url(${imageHome})`}}
        >
                 
       </div>
         
     </div>
   )
}

export default Home;
