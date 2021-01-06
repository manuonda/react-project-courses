
import React, { useEffect , useCallback} from 'react';
import { useLocation } from 'react-router-dom'
import { useRecoilState} from 'recoil'

import { isAuthenticated as isAuthenticatedAtom, spotifyRefreshToken as spotifyRefreshTokenAtom, spotifyTokenResponse as spotifyTokenResponseAtom} from '../../recoil/auth/atoms'
import {spotifyAuthCall} from '../../utils'
import imageHome from '../../assets/images/pngwing.com.png'
import "./style.css"

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&scope=user-read-private` 

export default function Home(){
   const location = useLocation();
   const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);
   const [spotifyRefreshToken ,  setSpotifyRefreshToken] = useRecoilState(spotifyRefreshTokenAtom);
   const [spotifyTokenResponse, setSpotifyTokenResponse] = useRecoilState(spotifyTokenResponseAtom);  

   
   
    const authenticateUser = useCallback(async (code) =>  {

      try {
        let response ;
        if ( spotifyRefreshToken) {
            response = await spotifyAuthCall({ refresh_token: spotifyRefreshToken});   
        } else {
           response = await spotifyAuthCall({ code }); 
        }

        console.log('Response : ', response);

        setSpotifyRefreshToken(response?.refresh_token);
        setSpotifyTokenResponse(response);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
      }
     

      // Todo redirigir a pantalla de buscar
    },[setSpotifyRefreshToken, setSpotifyTokenResponse, setIsAuthenticated, spotifyRefreshToken]);

   useEffect(() =>{
     const urlParams = new URLSearchParams(location.search)
     console.log(`urlParam : ${urlParams}`);
     const spotifyCode = urlParams.get("code"); 
     if ( spotifyCode) {
        console.log(spotifyCode);
        authenticateUser(spotifyCode);
     }
      
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

