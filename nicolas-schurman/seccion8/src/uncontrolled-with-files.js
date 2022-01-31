import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react';

const App = () => {

  const inputRef = useRef();
  const inputFile = useRef();

  const onSubmit = (e) => {
      e.preventDefault();
      const data =  Array.from(new FormData(e.target));
      console.log(Object.fromEntries(data));
  }

  return(<>
    <form onSubmit={onSubmit}>
     <label>input campo</label>
     <input type="text" ref={inputRef}></input>
     <label>Input file</label>
     <input type="file" ref={inputFile}></input>
     <input type="submit" value="Enviar" />
    </form>

    </>)
}

export default App;
