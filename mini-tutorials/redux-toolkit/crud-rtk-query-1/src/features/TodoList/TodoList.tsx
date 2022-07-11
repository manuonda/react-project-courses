import React , {useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../../type';
import { useGetTodosQuery , useAddTodoMutation, useDeleteTodoMutation,useUpdateTodoMutation} from '../api/apiSlice';



export const TodoList = () => {

  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const  { data, isLoading, isSuccess, isError, error } = useGetTodosQuery();
  console.log(data); 
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      debugger;
      addTodo({ 
        id: uuidv4(),
        title: newTodo,
        completed: false,
        userId: uuidv4()
       })
      setNewTodo('');
  }

  const newItemSection = (
     <form onSubmit={handleSubmit}>
       <label htmlFor='new-todo'>Enter a new todo item</label>
       <div className='new-todo'>
        <input type="text"
           id="new-todo"
           value={newTodo}
           onChange={(e) => setNewTodo(e.target.value)}
           ></input> 
       </div>
       <button type="submit">Upload</button> 
     </form>
  );

  let content;
  if ( isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    console.log(data);
     content = data?.map((todo:ITodo) => {
         return(
           <>
           <article key={todo.id}>
             <div className='todo'>
               <input type="checkbox"
                 checked={todo.completed}
                 id={todo.id}
                 onChange={(e) => updateTodo({ ...todo, completed: !todo.completed})}
               ></input>
               <label htmlFor={todo.id}>{todo.title}</label>
             </div>
             <button onClick={(e) => deleteTodo(todo.id)}>Delete</button>
           </article>
           
           </>
         )   
     })
    //setTodos(data);
    console.log(data);
    // content = todos.map ((todo:ITodo) => {
    //   return(
    //     <article>
    //     </article>
    //   )
    // });
  } else if (isError) {
    content = <p>{`Error ${error}`}</p>
  }

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  )
}

export default TodoList;
