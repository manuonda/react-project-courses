import { LocalStorageTypes, Person } from "@/models";
import { getLocalStoraget, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";


export interface Favorite {
    favorites: Person[]
}

const initialState : Favorite = {
    favorites:[]
}




export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: localStorage.getItem(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStoraget(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers : {
      
        addFavorites : (state, actions) => {
           setLocalStorage(LocalStorageTypes.FAVORITES, state);
           return actions.payload;
        }
    }
})

export const {addFavorites} =  favoriteSlice.actions;
export default favoriteSlice;