import { LocalStorageTypes, Person } from "@/models";
import { getLocalStoraget, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";


export interface Favorite {
    favorites: Person[]
}

const initialState : Favorite = {
    favorites:[]
}

const getLocalStorage  =() => {
    const resultado = localStorage.getItem(LocalStorageTypes.FAVORITES) ? 
       JSON.parse(getLocalStoraget(LocalStorageTypes.FAVORITES) as string) as Person[] : [];
    return resultado;
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorage(),
    reducers : {
      
        addFavorites : (state, actions) => {
           setLocalStorage(LocalStorageTypes.FAVORITES, actions.payload);
           return actions.payload;
        },
        removeFavorite : (state, actions) => {
            const findIndex = state.findIndex((x:Person) => x.id === actions.payload.id);
            state.splice(findIndex,1);
            setLocalStorage(LocalStorageTypes.FAVORITES, state)
            return state 
        }
    }
})

export const {addFavorites, removeFavorite} =  favoriteSlice.actions;
export default favoriteSlice;