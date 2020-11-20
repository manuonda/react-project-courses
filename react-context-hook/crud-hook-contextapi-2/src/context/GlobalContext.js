import React, {createContext , useReducer} from 'react'
import {AppReducer} from './AppReducer'

const initialState = {
    articles : []
}
export const GlobalContext = createContext(initialState)

const GlobalContextProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addArticle = article => {
        console.log('add Article : ', article);
        dispatch({
            type:'CREATE_ARTICLE',
            payload: article
        })
    }

    const deleteArticle = id => {
        dispatch({
            type:'DELETE_ARTICLE',
            payload: id
        })
    }

    const editArticle = (article) => {
        dispatch({
            type: 'EDIT_ARTICLE',
            payload: article
        })
    }

    
    return (
        <GlobalContext.Provider value={{ articles: state.articles, addArticle, editArticle, deleteArticle}}>
          {props.children}
        </GlobalContext.Provider>
    )


}

export default GlobalContextProvider;

