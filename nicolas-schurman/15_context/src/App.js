import {Component, createContext,useContext} from 'react';


const Context = createContext('mi valor');
const Context1 = createContext('mi valor 2');

const Provider = ({ children}) => {
    return (
        <Context.Provider value='otro valor'>
            <Context1.Provider value = 'otro valor 2'>
            {children}
            </Context1.Provider>
        </Context.Provider>
    )
}

class Componente extends Component {
    render() {
        return (
          <Context.Consumer>
            {
              valor1 =>
                <Context1.Consumer>
                  {valor2 => <div>{`${valor1} ${valor2}`}</div>}
                </Context1.Consumer>
            }
          </Context.Consumer>
        )
      }
}

const Component2 = () => {
  const context = useContext(Context);
  const context2 = useContext(Context1);

  return (
      <div>
          {context}
          <br></br>
          {context2}
      </div>
  )

   
}





const App = () => {
    return (
        <Provider>
            {/* Class en Componente */}
            <Componente></Componente>
            <br></br>
            {/* Components  */}
            <Component2></Component2>
        </Provider>
    )
}

export default App;