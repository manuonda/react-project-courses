import { createContext ,useState } from "react";


export const ThemeContext = createContext("ThemeContext");

const { Provider } = ThemeContext;

export const ThemeProvider = ({ children }) => {
    
    const [toggle, setToggle] = useState(false);
    const changeToggle = () => setToggle(!toggle);
    
    const init = {
       toggle,
       changeToggle   
    };
    return (
        <Provider value={init}>
            {children}
        </Provider>
    )
}