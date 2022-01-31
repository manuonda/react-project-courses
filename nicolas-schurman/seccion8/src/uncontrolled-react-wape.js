import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react';

const App = () => {

  const inputRef = useRef();
  const inputFile = useRef();

  const onSubmit = (ev) => {
      ev.preventDefault();
      console.log(inputRef.current.value);
      console.log(inputFile.current.files[0]);
      const form = new FormData();
      form.append('archivo', inputFile.current.files[0]);



  }

  return(<>
    <form>
     <label>input campo</label>
     <input type="text" ref={inputRef}></input>
     <label>Input file</label>
     <input type="file" ref={inputFile}></input>
     <input type="submit" value="Enviar"
      onClick={onSubmit}/>
    </form>

    </>)
}

export default App;
