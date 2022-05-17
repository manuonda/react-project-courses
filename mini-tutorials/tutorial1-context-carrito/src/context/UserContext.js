import { useState, createContext } from "react";


export const UserContext = createContext("loginContext");

const {Provider } = UserContext;

export const UserProvider = ({children}) => {

    const initValues = {
        username: '',
        password: ''     
    };
   
    const actions = {
        login
    } 
    const [state, setState] = useState(initValues);

    const login = (username, password) => {
        setState({
            username,
            password
        });
    }
    

    return (
<<<<<<< HEAD
        <Provider value={{state, actions}}>
=======
        <Provider value={{state, login}}>
>>>>>>> 9f18291ea2827071a3d3768c1fa50bd206df71c7
            {children}
        </Provider>
    )

}

