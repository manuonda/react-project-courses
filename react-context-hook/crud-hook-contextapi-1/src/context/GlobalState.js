import React, {createContext, useReducer} from 'react'
import { AppReducer}  from './AppReducer'


// InitialState
const initialState = {
    users:[
         { id:1 , name:'David'},
         { id:2 , name:'Andres'},
         { id:3 , name:'Leon'} 
    ]
}

// create context 
export const GlobalStateContext = createContext(initialState);

const GlobalStateProvider = (props) => {
    const[state,dispatch] = useReducer(AppReducer , initialState)
    return (
        <div>
            <GlobalStateContext.Provider value={{users:state.users , dispatch}}>
                {props.children}
            </GlobalStateContext.Provider>
            
        </div>
    );
};

export default GlobalStateProvider;