import { createContext, useState} from 'react'

// se crea la interfaz
export const AuthContext= createContext({
   auth: null,
   username: null,
   authenticate: () => {},
   logout: () => {}
});

// se crea la implementacion de la interfaz
export const AuthProvider = ({ children }) => {
   const[auth, setAuth] = useState(null);
   const[username, setUsername] = useState(null);


   /**
    * Funcion login de usuario
    */
   const authenticate  = ( usuario, password) => {
      const token = "myToken" 
      setAuth(token)
      setUsername(usuario);
   }

   /**
    * Funcion logout de Usuario
    */
   const logout = () => {
     setAuth(null)
     setUsername(null);
   }


   return <AuthContext.Provider value={{ auth, username, authenticate , logout}}>{children}</AuthContext.Provider>
}

