import { createContext, useState } from "react";


export const UserContext = createContext('user');



export const  UserProvider  =({children}: any) => {
  
    const  [user, setUser] =useState("david");
    return(
      <UserContext.Provider value={user}>
      {children}
      </UserContext.Provider>
    );
    
}