import React, { Children, createContext , useState } from 'react'

// interfaz
export const UsuarioContext = createContext();

// implementacion de la interfaz
export const UsuarioProvider =  ({children}) => {

    const[auth, setAuth] = useState("holmundo");
    const authenticate = (token) => {
        console.log('qui ingreso a token  :', token);
        setAuth(token);
    }
    const logout = () => {
        setAuth(null);
    }


    return  (
        <UsuarioContext.Provider value={{auth, authenticate, logout}}>{children}</UsuarioContext.Provider>
    )
}




