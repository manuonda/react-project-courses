import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as api from "../api/api";
import { IUser } from '../type';

interface IProps {
    id: number
}

export const UserDetail = () => {
  const params = useParams();
  const {id} = params;
  console.log('id : ', id );
  const { data , isLoading, isSuccess} = useQuery(["users", id], () =>  api.getById(id));
  
 
  if ( isLoading) {
    return(<p>Loading User Details...</p>)
  }
 
      
  return (
    <div>
      <h1>User Detail</h1>
      <label htmlFor='nombre'>Nombre</label>
      <input type="text" value={data? data.nombre : ""}/>
     <Link to={"/"}>Volver</Link>
   </div>
    )
  
}

export default UserDetail;
