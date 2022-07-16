import React from 'react'
import { IUser } from '../type';
import {Link} from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import * as api from "../api/api";
import { useNavigate} from "react-router-dom";


interface IProps {
  user:IUser
}

export const UserItem = ({ user }: IProps) => {
    const queryCliente = useQueryClient();
    const navigate =useNavigate();
    const { mutateAsync,isLoading } = useMutation(api.deleteById,{
       onSuccess: () => {
           alert("success query  ");
           //queryCliente.invalidateQueries("users");
       },
       onError: () => {
           alert("on error")
       },
       onMutate :() => {
           alert("onMutate");
       } 
    });

    const handleDelete = async () => {
        await mutateAsync(user.id);
        queryCliente.invalidateQueries("users");
     }

  return (
    <li key={user.id}>{user.nombre}
    <Link to={`/user-detail/${user.id}`}> View </Link>
    <button onClick={handleDelete} type="button">Delete { isLoading ? <p>Borrando...</p> : ""}</button>
    </li>
  )
}

export default UserItem;
