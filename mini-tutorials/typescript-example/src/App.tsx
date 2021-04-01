import React from 'react';
import TextField from "./components/TextField";


const App: React.FC = () => {
  return(
    <div>
      <TextField text="Hola mundo" person={{firstName: "david", lastName:"garcia"}} ></TextField>
    </div>
    )
  }

  export default App;
