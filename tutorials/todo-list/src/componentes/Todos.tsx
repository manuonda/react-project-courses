import { type ITodo } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ITodo[]
}

export const Todos: React.FC<Props> = ({ todos }: Props) => {
  return (
        <ul>
            {todos?.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'complete' : ''}`}>
                <Todo id={todo.id} title={todo.title} completed={todo.completed}/>
                </li>
            ))}
        </ul>
  )
}
