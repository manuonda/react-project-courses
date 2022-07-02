import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Task } from '../types'
import { addTask } from '../features/tasks/taskSlice'
import nextId from "react-id-generator"
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate ,useParams } from "react-router-dom";



export const TaskForm = () => {
  const stateTasks = useSelector((state:RootState) =>  state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;


  useEffect(() => {
    console.log("useEffect ");
    console.log("id : ", id );
    console.log(stateTasks.tasks);
    if ( id !== undefined && id !== "") {
       const find =  stateTasks.tasks.find( x => x.id === id);
       console.log('find encontrado : ',find);
       if ( find && find !== undefined) {
         setTask(find);
       }
    }
  },[]);

  const [task, setTask] = useState<Task>({
    id : "", 
    title: "",
     description: "",
     completed: false
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTask((task) => ( {
          ...task,
          [e.target.name] : e.target.value
      }))
  }


  const handleSave=(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if ( task.id === null || task.id === "") {
          task.id =uuidv4();;
      }
      dispatch(addTask(task));
      navigate("/");

  }
  return (
    <form onSubmit={handleSave} className="bg-zinc-800 max-w-sm p-4 mb-2">
        <label htmlFor='title' className='block text-sm font-bold'>Name</label>  
        <input onChange={handleChange} type="text" name="title" value={task.title}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        ></input>
        <label htmlFor='description' className='block text-sm font-bold mb-2'>Description</label>
        <textarea onChange={handleChange}  name="description" value={task.description}
         className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        ></textarea> 
        <div className='flex gap-x-2'>
        <Link to="/" className="bg-indigo-500 px-2 py-2 ">Volver</Link>
        <button type="submit" className='bg-red-600 px-2 py-1'>Guardar</button>
         </div>
    </form>
  )
}
