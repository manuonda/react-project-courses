import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useFetchRepository } from './hooks/useRepos'
import { Repository } from './types/Repository';
import { Cards } from './components/Card';
import { useFavoriteReposStore } from './store/favoriteReport';

function App() {

  const {data , isLoading} = useFetchRepository();
  const { addFavoriteRepo, removeFavoriteRepo, favoriteReposIds} = useFavoriteReposStore();

  if (isLoading) return <div> Loading...</div>
  console.log(data)
  return (
      <div> 
      {
         data?.map( repo => (
           <Cards repository={repo}
            key={repo.id}
            isFavorite = {favoriteReposIds.includes(repo.id)}
           />
         ))
      }
      </div>
  )
}

export default App
