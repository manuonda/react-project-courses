import "./App.css";
import { useState , useEffect } from "react";
import UseForm  from './components/UseForm';
import Container from './components/Container';
import Card from './components/Card';


const App = () => {
  
   const[usuarios,setUsuario] = useState([]);

   const handleSubmit = usuario => {
     console.log(usuario);
     setUsuario([
       ...usuarios,
       usuario
     ]);
   }


  useEffect(() => {
    console.log("useEffect");
  }, []) 

  return (
    <div className="App" style={{marginTop : '15%'}}>
       <Container>
      <Card>
      <div style={{ padding: 20}}>
       <UseForm  submit={handleSubmit}/>
      
      </div>
      </Card>
      <Card>
        { usuarios && (
          usuarios.map( usuario => (
            <li key={usuario.email}>
             { `${usuario.name}, ${usuario.apellido}: ${usuario.email}`}
            </li>
          ))
        )}
      </Card>
      </Container>
    </div>
  );
};

export default App;
