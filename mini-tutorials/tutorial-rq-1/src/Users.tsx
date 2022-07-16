import React from 'react'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import * as api from "../src/api/api";
import UserItem from './components/UserItem';


interface Ipros {
    setUserId: React.Dispatch<React.SetStateAction<undefined>>
    ;
}

export const Users = () => {
    const  {data , isLoading, status, isSuccess, isError , isFetching }  = useQuery('users', api.getAll,{
        retry: false
    });


    if( isLoading) {
        return (<p>Loading...</p>);
    }

    if(isError) {
        return (<p>Something is error!</p>);
    }

    if ( isFetching) {
        return(<p>Fetching data...</p>)
    }


  

    return (
    <div>
        <Link to={`/create-user`}>Create User</Link>
        <ul>
        { data && data.map((user:any) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
        </ul>
       </div>
  )
}

export default Users;
