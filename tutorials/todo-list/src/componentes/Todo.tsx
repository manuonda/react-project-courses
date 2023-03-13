import { type ITodo as TodoType } from '../types'

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, completed }: Props) => {
  return (
        <div className="view">
           <input
             className="toggle"
             checked={completed}
             type="checkbox"
             onChange={() => {}}
             />
             <label>{title}</label>
             <button
             className='destroy'
             onClick={() => {}}></button>
        </div>
  )
}
