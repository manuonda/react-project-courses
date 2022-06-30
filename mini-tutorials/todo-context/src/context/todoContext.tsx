import { useState, createContext, FC } from "react"
import nextId from "react-id-generator";



export interface Todo {
    id: string;
    name?: string;
    url?: string;
}

export type TodoContextState = {
    todos: Todo[],
    saveTodo: (todo: Todo) => void,
    removeTodo: (todo: Todo) => void,
    allTodo: () => void;
}


const defaultValueContext: TodoContextState = {
    todos: [],
    saveTodo: () => { },
    removeTodo: () => { },
    allTodo: () => { }
}

export const TodoContext = createContext<TodoContextState>(defaultValueContext);

interface Iprops {
    children: any
}

const TodoProvider = ({children}: Iprops) => {

    const [todos, setTodos] = useState<Todo[]>([]);
   
    const saveTodo = (todo: Todo) => {
        debugger;
        if( todo.id !== "" ) {
            updateTodo(todo);
            return;
        }
        const newTodo : Todo = {
          id: nextId(),
          name: todo.name
        };
        setTodos((todos) => [...todos, newTodo]);
    }

    const removeTodo = (todoRemove: Todo) => {
        console.log('remove todo:',todoRemove.id );
        setTodos((todos) => todos.filter(todo => todo.id !== todoRemove.id));
    }

    const updateTodo = (updateTodo: Todo) => {
        const newTodos =  todos.map(todo => {
            if ( todo.id === updateTodo.id) {
              return {
                 ...todo,
                 name: updateTodo.name
              }
            }else {
                return todo;
            }
        })
        setTodos(newTodos);
    }

    const allTodo = () => {
        return todos;
    }

    const values = {
        todos,
        saveTodo,
        removeTodo,
        allTodo
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;