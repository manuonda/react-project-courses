
import {FC} from 'react'
import { useFavoriteReposStore } from '../store/favoriteReport'
import { Repository } from '../types/Repository'
import {persist} from 'zustand/middleware'

type TCard = {
    repository: Repository,
    isFavorite: boolean
}

export const Cards:React.FC<TCard> =({ repository , isFavorite}) => {

     const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo)
     const removeFavoriteRepo = useFavoriteReposStore(state => state.removeFavoriteRepo)

     const toggleFavorite = () => {
      if ( isFavorite) {
         removeFavoriteRepo(repository.id);
         return
      }
      addFavoriteRepo(repository.id);
     }
     return (
        <div>
           <h1>{repository.name}</h1>
           <button onClick={toggleFavorite}>
             {
               isFavorite ? "dislike" : "like"
             }
           </button>
        </div>
     )
}