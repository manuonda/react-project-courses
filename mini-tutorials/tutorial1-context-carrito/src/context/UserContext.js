import { useState, createContext } from "react";


export const UserContext = createContext("loginContext");

const {Provider } = UserContext;

export const UserProvider = ({children}) => {

    const initValues = {
        username: '',
        password: ''     
    };

    const [state, setState] = useState(initValues);

    const login = (username, password) => {
        setState({
            username,
            password
        });
    }

    return (
        <Provider value={{state, login}}>
            {children}
        </Provider>
    )

}

