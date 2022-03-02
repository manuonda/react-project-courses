import { context , createContext, useContext} from 'react';


const ContextDefault = createContext('valor por defecto');
const Context2 = createContext('valor por defecto2');


// Proveedor para ser utilizado 
// a las demas propiedades
const DefaultProvider = ({ children}) => {

  return(
    <ContextDefault.Provider value={'valor numero uno'}>
      {children}
    </ContextDefault.Provider>
  )
}

// Componente
const Contenido = () => {
  // Permite defenir el context a trabajar
   const ctx = useContext(ContextDefault)
  return(
    <>
    {ctx}
    </>
  )
}


// No se establecio un Provider
const Contenido2 = () => {
  // Permite defenir el context a trabajar
   const ctx = useContext(Context2)
  return(
    <>
    {ctx}
    </>
  )
}



function App() {
  return (
    <DefaultProvider>
      <Contenido></Contenido>
        <br></br>
      <Contenido2></Contenido2>
    </DefaultProvider>
  );
}

export default App;
