import React from 'react'
import { type ITodo as TodoType } from '../types'

// type Props = TodoType

interface Props extends TodoType {
  onRemoveTodo: (id: number) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }: Props) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => { onRemoveTodo(id) }}></button>
    </div>
  )
}
