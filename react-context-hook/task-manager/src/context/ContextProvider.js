import React, {useReducer  , createContext} from 'react'
import {AppReducer , initialState} from './AppReducer'



export const GlobalStateContext= createContext(initialState);
const ContextProvider = (props) => {
    const[state , dispatch] = useReducer(AppReducer, initialState);
    const addTask = (task) => {
        console.log('Add Task : ' ,task);
         dispatch({
            type:'ADD_TASK',
            payload: task
        });
    } 

    const deleteTask =(id) => {
        dispatch({
            type:'DELETE_TASK',
            payload: id
        });
    }

    const editTask = (task) => {
           dispatch({
              type:'EDIT_TASK',
              payload: task
          })
    };

    const findTask = (id) => {
         dispatch({
            type:'FIND_TASK',
            payload: id
        })
        console.log('finTASK  : ', initialState);
    }

    return (
        <div>
         <GlobalStateContext.Provider value={{tasks:state.tasks, addTask , editTask , deleteTask:deleteTask , findTask }}>
             {props.children}
            </GlobalStateContext.Provider>         
        </div>
    );
};

export default ContextProvider;