import {context, createContext, useContext,useState} from 'react';


const Context = createContext({
    valor: false,
    toggle: () => {}
});

const Provider =  ({ children }) => {
    const [valor, setValor] = useState(false);
    const value = {
        valor:  false,
        toggle: () => setValor(!valor)
    };
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}


const Componente = () => {
    const {valor, toggle } = useContext(Context);
    console.log(Context);
    
    return(
        <>
        <label>{valor.toString()}</label>
        <button onClick={toggle}>Toggle</button>
        </>
    )
}

const App = () => {
    return(
        <Provider>
            <Componente></Componente>
        </Provider>
    )
}

export default App;