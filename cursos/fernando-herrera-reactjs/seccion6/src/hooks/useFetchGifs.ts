
import {useState, useEffect } from 'react'
import {State} from '../types';
import {loadData} from '../helpers/getGifs'



export const useFetchGifs = (category: string) => {

   const [state, setState] = useState<State>({
         data:[],
         loading: true
       });


       useEffect(() =>{
          loadFetch(category)
       }, [category]);

     const loadFetch = async (category:string ) => { 
        console.log("loadData : ",category);
         try {
            const result = await loadData(category);
            console.log(result);
            setState({
               data: result,
               loading:false
            })
         } catch (error) {
            setState({
               data:[],
               loading:false
            })
         }
     }
  return state;
}