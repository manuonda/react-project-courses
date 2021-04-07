import React , {useEffect, useState} from 'react';
import { ITodo}  from './type';
import TodoItem from './components/TodoItem';
import { getTodos, addTodo } from './Api';
import './App.css';

const App = () => {  
  
  const[todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  },[]);

  const fetchTodos = ():void =>{
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any ) => setTodos(todos))
    .catch((error) => console.log(error));
  }

  const handleUpdateTodo = (todo: ITodo):void =>{
     console.log("handleUpdateTodo : ", todo);
  }

  const handleDeleteTodo = (_id:string) =>{
      console.log("delete todo  :"+ _id);
  }

  return(
     <>
       {
         todos.map((todo: ITodo) => (
           <TodoItem  
              key={todo._id}
              updateTodo={handleUpdateTodo}
              deleteTodo={handleDeleteTodo}
              todo={todo}
           ></TodoItem>
          
         ))
       }
     
     </>
  );


}
export default App;
