import { useState } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { RootState } from './app/store';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import './index.css';
//useDispath: hacer algo 
//usSelector: para tomar algo

function App() {
  const [count, setCount] = useState(0)
  const tasksState = useSelector((state: RootState) => state.tasks); 
  const dispatch =  useDispatch();
  console.log(tasksState);

  return (
    <div className="bg-zinc-900 h-screen text-white">
     <div className='flex items-center justify-center'>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskList></TaskList>}></Route>
        <Route path="/create-task" element={<TaskForm></TaskForm>}></Route>
        <Route path="/edit-task/:id" element={<TaskForm></TaskForm>}></Route> 
      </Routes>
      </BrowserRouter>
     </div>
    </div>
  )
}

export default App
