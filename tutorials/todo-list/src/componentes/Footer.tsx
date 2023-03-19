import { type ITodo as TypeTodo } from "../types"
import { TODO_FILTERS } from "../const"

interface Props {
  todos: TypeTodo[]
}


export const Footer: React.FC<Props> = ({ activeCount, 
  todos,
  onClearCompleted
}: Props) => {
  return (
        <footer className="footer">
           <span className="todo-count">
                <strong>{todos.length}</strong>
            </span>
        </footer>

        <Filters
          filterSelected={}
          onFilterChanged={() => {}}
         />

  )
}
