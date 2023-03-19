import { type ITodo } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ITodo[]
  onRemoveTodo: (id: number) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<ITodo, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }: Props) => {
  return (
        <ul className='todo-list'>
            {todos?.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'complete' : ''}`}>
                <Todo
                   id={todo.id}
                   title={todo.title}
                   completed={todo.completed}
                   onRemoveTodo={onRemoveTodo}
                   onToggleCompleteTodo={onToggleCompleteTodo}
                   />
                </li>
            ))}
        </ul>
  )
}
