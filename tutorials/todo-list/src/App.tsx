import { useState } from 'react'
import { Todo } from './componentes/Todo'
import { Todos } from './componentes/Todos'
import { ITodo } from './types';

const mockTodos = [
  {
    id: 1,
    title: 'titulo1',
    completed: false
  }, {
    id: 2,
    title: 'titulo2',
    completed: true
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: number): void => {
    const newTodos = mockTodos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed}: Pick<ITodo, 'id' | 'completed'>): void => {
    const newTodos: ITodo[] = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
       <Todos
          todos={todos}
          onToggleCompleteTodo={handleCompleted}
          onRemoveTodo={handleRemove} />
    </div>
  )
}

export default App
