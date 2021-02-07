import { createContext, useState} from 'react'

// se crea la interfaz
export const AuthContext= createContext({
   auth: null,
   authenticate: () => {},
   logout: () => {}
});

// se crea la implementacion de la interfaz
export const AuthProvider = ({ children }) => {
   const[auth, setAuth] = useState(null);


   /**
    * Funcion login de usuario
    */
   const authenticate  = ( username, password) => {
      const token = "myToken" 
      setAuth(token)
   }

   /**
    * Funcion logout de Usuario
    */
   const logout = () => {
     setAuth(null)
   }


   return <AuthContext.Provider value={{ auth, authenticate , logout}}>{children}</AuthContext.Provider>
}

