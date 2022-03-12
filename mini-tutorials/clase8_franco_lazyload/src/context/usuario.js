import { createContext } from "react";


export const UserContext= createContext('usuario');
const {Provider} =  UserContext;

export const UserProvider = ({ children }) => {
    
    const initial = {
        username: 'david',
        lastname: 'garcia',
        id:  32
    }
    return(
        <Provider value={initial}>
           { children }
        </Provider>
    )
} 

