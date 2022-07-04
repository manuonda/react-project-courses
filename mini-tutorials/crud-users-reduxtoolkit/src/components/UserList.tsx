import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TUser } from '../type';
import User from './User';



export const UserList = () => {

  const state = useSelector((state: any) => state);
  const [users, setUsers] = useState([]);
  console.log(state.users);
  useEffect(() => {
    setUsers(state.users.users);
  }, [state])

  return (
    <div className='content-center'>
       <Link to={'/create-user'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Create User</Link>
       
      <div className='h-56 grid grid-cols-3 gap-4 content-start'>
        {users && users.map((user: TUser) => (
          <User key={user.id} user={user}></User>
        ))}

      </div>

    </div>
  )
}

export default UserList;
