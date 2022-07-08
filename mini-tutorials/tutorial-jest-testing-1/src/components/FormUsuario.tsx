import React, { useState } from 'react'
import { IUsuario } from '../type';

export const FormUsuario = () => {
  
   
    const [usuario, setUsuario] = useState<IUsuario>({
        id:0,
        lastname: "",
        firstname: "",
        description: ""
    });
    const [show, setShow] =useState<boolean>(false);

    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       setShow(true);
 
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUsuario((usuario:IUsuario) => ({
         ...usuario,
         [e.target.name] :e.target.value
      }));
    }

    return (
      <>
      { show && ( <h1>Usuario Agregado</h1>)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username-input">User Name</label>
        <input id="username-input" type="text" name="username" onChange={handleChange}></input>
        <label htmlFor='lastname-input'>Last Name</label>
        <input id="lastname-input" type="text" name="lastname" onChange={handleChange}></input>
        <label>Descripcion</label>
        <textarea name="description"  onChange={handleChange}></textarea>

        <button type='submit'>Guardar</button>
      
      </form>
      </>
  )
}
