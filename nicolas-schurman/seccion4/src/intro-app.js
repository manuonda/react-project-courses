import logo from './logo.svg';
import './App.css';
import './main.css';

const estilo2 =  {
   boxShadow: `0 5px 3px rgba(0,0,0,0.5)`
};
const estilo  = (bg) =>  ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})

const Li = ({ children }) => {
    return (
        <li style={{ ...estilo2, ...estilo('#057')}} >{ children}</li> 
    );
}

const App = () => {
  return (
    <div className="App">
      <ul>
        <Li estado="feliz">Valor uno</Li>
      </ul>
    </div>
  );
}

export default App;
