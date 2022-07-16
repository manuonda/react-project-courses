import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { IUser } from '../type';
import * as api from "../api/api"
import { v4 as uuidv4 } from 'uuid';
import { Link , useNavigate} from 'react-router-dom';


export const UserForm = () => {
     const queryClient = useQueryClient();
     const navigate = useNavigate();
     const [user, setUser] = useState<IUser>({
        id: 0,
        nombre: ""
    });
    // update
    const {isLoading, mutate} = useMutation(api.postUser,{
        onMutate: (updateUser)  => {
           queryClient.setQueryData(['user', user.id],updateUser)     
        },
        onSuccess: () => {
            alert("sucess true");
            queryClient.invalidateQueries('users');

            navigate("/");
        },
        onError: () => {
            alert("Error save");
        }
    });

 
    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if ( user.id === null ) {
          user.id = uuidv4();
      }
      mutate(user);

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setUser({
           ...user,
           [e.target.name] : e.target.value

       });
    }
  
    return (
    <>
     <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre</label>
        <input  name="nombre" type="text" onChange={handleChange} value={user.nombre}></input>
        <Link to={'/'}>Volver</Link>
        <button type='submit'>Enviar</button>
     </form>

    </>
  )
}


export default UserForm;