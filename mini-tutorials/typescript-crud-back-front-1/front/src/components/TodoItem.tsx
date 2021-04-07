import React from 'react'
import {ITodo , TodoProps} from '../type';

type Props = TodoProps &{
     todo: ITodo,
     updateTodo:(todo: ITodo) => void,
     deleteTodo:(_id: string) => void
}

export const TodoItem:React.FC<Props>= ({ todo, updateTodo,deleteTodo }) => {
    const checkTodo: string = todo.status ? `line-through` : ""
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? `hide-button` : "Card--button__done"}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem;
