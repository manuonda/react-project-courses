import {createContext, useState} from 'react'

export const FavoriteContext = createContext({
    favorites:[],
    addFavorite : () => {},
    deleteFavorite: ()  => {}
})

export const FavoriteProvider = ({children}) => {
    
    const[favorite, setFavorites] = useState([]);

    const addFavorite = () => {
       
    }

    const removeFavorite = () => {
       
    }

    return <FavoriteContext.Provider value={favorites, addFavorite, removeFavorite}></FavoriteContext.Provider>

}