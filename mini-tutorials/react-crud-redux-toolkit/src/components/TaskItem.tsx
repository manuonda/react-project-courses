import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Task } from '../types';
import { deleteTask } from '../features/tasks/taskSlice';

export const TaskItem = (task: Task) => {

    const dispatch = useDispatch();

    const handleDelete = (task: Task) => {
        dispatch(deleteTask(task));
    }
    return (
        <div className='bg-neutral-800 p-4 rounded-md' key={task.id}>
            <header className="flex justify-between">
                <span>{task.title}</span>
                <div className='flex gap-x-2'>
                    <Link to={`/edit-task/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit</Link>
                    <button type="button" onClick={(e) => handleDelete(task)} className="bg-red-500 px-2 py-1 text-xs rounded-md self-center">Delete</button>


                </div>
            </header>

            <p>{task.description}</p>

        </div>
    )
}

export default TaskItem;
