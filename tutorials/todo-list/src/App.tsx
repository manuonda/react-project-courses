import { useState } from 'react'
import { Todos } from './componentes/Todos'

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
  const [todos] = useState(mockTodos)
  return (
    <Todos todos={todos} />
  )
}

export default App
