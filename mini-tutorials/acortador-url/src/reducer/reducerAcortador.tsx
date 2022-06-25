import { useReducer } from "react"
import { AcortadorUrl } from "../types";
import { Actions, ActionsAcortador } from "./actions";




interface acortadorState {
  items: Array<AcortadorUrl>
}

const INIT_STATE = {
    items: Array<AcortadorUrl>()
}

function getRandomURL() {
    const random_string =
      Math.random().toString(32).substring(2, 5) +
      Math.random().toString(32).substring(2, 5);
    return random_string;
  }
  

const acortadorReducer =(state: acortadorState, action: ActionsAcortador)  => {
    switch(action.type) {
     case Actions.ADD: 
       const url = action.payload;
       const shorUrl = getRandomURL();
       const temp = [...state.items];
       
       const newItem:AcortadorUrl = {
           url:url,
           shortUrl: shorUrl,
           views:0
       } ;
       
       temp.unshift(newItem);
       localStorage.setItem("urls", JSON.stringify([...temp]));
       return {
           ...state,
           items: [...temp]
       }
      case Actions.LOAD: 
        const data = localStorage.getItem('urls');
        if ( data ){
            const temp = JSON.parse(data);
            return {
                items: temp
            }
        }else {
            return {
                items:[]
            }
        }
      case Actions.LOAD_VIEW:
          let tempLoad = [...state.items];
          const item = tempLoad.find( i => i === action.payload);
          if ( item ) {
             item.views = item.views + 1;
             localStorage.setItem('urls', JSON.stringify(tempLoad));
             return {
                 items: [...tempLoad]
             }
          } else {
             return {
                 ...state
             }
          }
          
       
    }
    
}

const useReducerApp = () => {
    return useReducer( acortadorReducer, INIT_STATE);
}


export default useReducerApp;