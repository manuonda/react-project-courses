import React, {Dispatch, useReducer} from 'react'
import useReducerUsuarioForm from '../hookReducer/formReducer';
import useNewReducerUsuarioForm from '../hookReducer/formReducer';
import FormReducer from '../hookReducer/formReducer';
import { Usuario } from '../types';



interface Props {
  onNewUsuario :(usuario: Usuario) => void
}



export const FormUsuario = ( { onNewUsuario} : Props) => {
  


  const[ inputValues, dispatch] = useReducerUsuarioForm();
   
  console.log('inputValue : ', inputValues)
  console.log('dispatch : ', dispatch)

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name , value } = ev.target;
    dispatch({
      type: 'change_value',
      payload: {
        inputName:name,
        inputValue: value
      }
    });
  }
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
     ev.preventDefault();
     onNewUsuario(inputValues);
     handleClear();
    
  }

  // AQUI TERMINAR

  const handleClear= () => {
    dispatch({ type:'clear'});
  }



  
  return (
    <>
      <div className="">
       <form onSubmit={handleSubmit}>
       <label>Nombre</label>
        <input type="text" name="nombre"  onChange={handleChange} value={inputValues.nombre}/>
        <label>Apellido</label> 
        <input type="text" name="apellido"  onChange={handleChange} value={inputValues.apellido}></input>
        <label>Documento</label>
        <input type="text" name="documento" onChange={handleChange} value={inputValues.documento}></input>
      
        <button type='submit'>Enviar</button>
        <button type="button" onClick={handleClear}>Limpiar</button>
       </form>
      </div>
    </>
  )
}

export default FormUsuario;
