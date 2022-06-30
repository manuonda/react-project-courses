import React, { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoProvider, { Todo, TodoContext } from './context/todoContext'

const Todos = () => {
  const { todos, saveTodo, removeTodo } = useContext(TodoContext)
  const [todo, setTodo] = useState<Todo>({
    id: "",
    name: 'prueba',
    url: ''
  });

  const changeEvent =(e:React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSave = () => {
    saveTodo(todo);
    setTodo({
      id: "",
      name: ""
    });
  }

  return (
    <div>
      <label>Name</label>
      <input name="name" onChange={changeEvent}  type="text" value={todo?.name}></input>
      <button onClick={handleSave}>Guardar</button>
      <ul>
        {todos && todos.map(todo => (
          <>
            <li key={todo.id}>{todo.id} - {todo.name}</li>
            <button type='button' onClick={() => removeTodo(todo)}>Remove</button>
            <button type="button" onClick={() => setTodo({...todo})}>Select</button>
          </>
        ))}
      </ul>
    </div>
  );
}

const App = () => {
  return (
    <TodoProvider>
      <Todos></Todos>
    </TodoProvider>
  )
}

export default App
