import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TUser } from '../type';
import User from './User';



export const UserList = () => {
   
  const state = useSelector( (state:any) => state);
  const [users, setUsers] = useState([]);
  console.log(state.users);
  useEffect(() => {
      
     setUsers(state.users.users);
  },[])

  return (
    <div>
        <Link to={'/create-user'}>Create User</Link>
        { users && users.map((user:TUser) => (
           <User key={user.id} {...user}></User>
        )) }

    </div>
  )
}

export default UserList;
