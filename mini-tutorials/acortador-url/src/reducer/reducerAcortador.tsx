import { useReducer } from "react"
import { AcortadorUrl } from "../types";


enum actions { ADD, LOAD, REMOVE, CLEAR, LOAD_VIEW}

type  actionAcortado =  {
   type: actions.ADD,
   payload:string 
}

interface acortadorState {
  items: Array<AcortadorUrl>
}

const INIT_STATE = {
    items: Array<AcortadorUrl>()
}

function getRandomURL() {
    const randomString: string = Math.random().toString(32).substring(2, 3);
    return randomString;
}

const acortadorReducer =(state: acortadorState, action: actionAcortado)  => {
    switch(action.type) {
       case actions.ADD: 
       const url = action.payload;
       const shorUrl = getRandomURL();
       const temp = [...state.items];
       
       const newItem:AcortadorUrl = {
           url:url,
           shortUrl: shorUrl,
           views:0
       } ;
       
       temp.unshift(newItem);
       return {
           ...state,
           items: [...temp]
       }  
       
    }
}

const useReducerApp = () => {
    return useReducer( acortadorReducer, INIT_STATE);
}


export default useReducerApp;