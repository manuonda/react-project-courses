import React , {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Item from './Item';
import Loading from './Loading'
import useFetch from '../customHooks/useFetch';

const BASE_URL="https://rickandmortyapi.com/api/character";

const List = () => {
  
    const[data,fetching,error] =  useFetch('character');
    const {info, results: characters } = data;

    return (
        <Grid container spacing={2}>
             {fetching ?
             <Loading/>
             :
            characters.map(character =>(
              <Item key={character.id} {...character}></Item>  
              ))
             }            
        </Grid>
        
    )
}

export default List;
