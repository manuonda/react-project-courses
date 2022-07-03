import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams ,Link } from 'react-router-dom';
import { addUser } from '../features/users/userSlice';
import { TUser } from '../type';
import { v4 as uuid } from 'uuid';


export const UserForm = () => {

  const dispatch = useDispatch()
  const { state: users} = useSelector( (state:any) => state.users);
  console.log('state users : ',users);
  const [usuario, setUsuario] = useState<TUser>({
     id: "",
     username: "",
     lastname: ""

  });
  const navigate = useNavigate();
  const params = useParams();
  const {id } = params;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (usuario.id === "" || usuario.id === null) {
        usuario.id = uuid();
      }
      dispatch(addUser(usuario)); 
      navigate("/");
  }

  const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }


  useEffect(() => {
    if (id !== undefined) {
        const find = users.find( (x:TUser) => x.id === parseInt(id));
        if (find ) {
          setUsuario(find);
        }
    }  
  },[])
  return (
    <div className="flex justify-center items-center h-screen">

    <div className="w-full max-w-xs">
  <form  onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input name="username" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
             id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        LastName
      </label>
      <input type="text" 
             name="lastname"
             className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
             id="password"/>
      
    </div>
    <div className="flex items-center justify-between">
      <Link to={"/"} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Volver</Link>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Guardar
      </button>
     
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
</div>
  )
}

export default UserForm;