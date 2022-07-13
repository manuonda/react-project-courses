import React from 'react'
import { useQuery } from 'react-query';
import * as api from "../src/api/api";


export const Users = () => {
    const  {data , isLoading, status, isSuccess, isError }  = useQuery('users', api.getAll,{
        retry: false
    });

    if( isLoading) {
        return (<p>Loading...</p>);
    }

    if(isError) {
        return (<p>Something is error!</p>);
    }

    return (
    <div>
        <ul>
        { data && data.map((user:any) => (
           <li key={user.id}>{user.nombre}</li>
        ))}
        </ul>
       </div>
  )
}

export default Users;
