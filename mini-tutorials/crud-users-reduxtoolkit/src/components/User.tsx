import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../features/users/userSlice';
import { TUser } from '../type';

interface IProps {
    user: TUser
}

export const User = ({ user }: IProps) => {

    const dispatch = useDispatch();



    return (
        <div>
            <div className="relative p-4">
                <div className="w-[19.875rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                    <div className="flex items-center p-4 pb-0">
                        <div className="ml-4 flex-auto"><div className="font-medium">{user.username} - {user.lastname}</div>
                        </div></div>
                    <div className='flex'>
                        <button type="button" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                            onClick={(e) => dispatch(deleteUser(user))}>Delete</button>
                        <Link to={`/edit-user/${user.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Edit</Link>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default User;
