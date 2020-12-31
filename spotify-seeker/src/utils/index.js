import apiCall from  '../api/';

const commonParams = {
    redirect_uri: process.env.REACT_APP_SPOTIFY_CALLBACK_HOST,
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    secret_id: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
};

export const spotifyAuthCall = async (code) => {
 
   try {
    
    const params = {
        code,
        grant_type: 'authorization-code',
        ...commonParams
    };
  
    const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");
    console.log(searchParams);
    
    const spotifyCall = await apiCall({
        method: 'POST',
        url: "https://accounts.spotify.com/api/token",
        body: searchParams,
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    });
  
    console.log(spotifyCall);
    return await spotifyCall.json();
       
   } catch (error) {
    console.log(error);     
   }
};

