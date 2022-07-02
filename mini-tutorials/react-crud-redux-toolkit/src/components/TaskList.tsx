import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { RootState } from '../app/store'
import { Task } from '../types';
import TaskItem from './TaskItem';


export const TaskList = () => {
  const tasks = useSelector((state:RootState) =>  state.tasks.tasks);

    return (
     <div className='w-4/6 bg-red-100'>
       <header className="flex justify-between items-center py-4">
       <Link to={"/create-task"} className="bg-indigo-600 px-2 py-1">Create Task</Link>
       </header>
        <div className='grid grid-cols-3 gap-4'>
        {tasks && tasks.map((task:Task) => (
           <TaskItem key={task.id} {...task}></TaskItem>
         ))}
        </div>
     </div>
  )
}
