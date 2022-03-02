import { createContext, useContext, useState, memo } from 'react'


const Context = createContext();

const ContadorProvider = ({ children }) => {
    const [contador, setContador ] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar  = () => setContador(contador - 1 );


    return (
        <Context.Provider value = {{ contador, decrementar, incrementar}}>
            {children}
        </Context.Provider>
    )
}


const Incrementar = () => {
    console.log('incrementar')
    const {incrementar} = useContext(Context);             

    return (
        <button onClick={incrementar}>Incrementar</button>
    )
}

const Decrementar = () => {
    console.log('decrementnar');

    const {decrementar} = useContext(Context);
    return(
        <button onClick={decrementar}>Decrementar</button>
    );

}


const Label = () => {
    console.log("Label");

    const{ contador } = useContext(Context);

    return(
      <h1>{contador}</h1>
    );
}


const App =() => {

    return (
        <ContadorProvider>
            <Incrementar></Incrementar>
            <Decrementar></Decrementar>
            <br></br> 
            <Label></Label>
        </ContadorProvider>
    )
}

export default App;