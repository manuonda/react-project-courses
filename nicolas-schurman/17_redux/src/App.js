import { useSelector , useDispatch} from'react-redux';
import { useState } from 'react';

const initialState = {
    entities: []
}

export const reducer = (state = initialState, action) => {
     
    switch(action.type) {
      case 'todo/add': {
           console.log('reducer!');
           return {
               ...state,
               entities: state.entities.concat({...action.payload})
           }
      }
    }
    return state;
}

const TodoItem = ({...todo}) => {
    return (
        <li>{todo.title}</li>
    )
}
const App = () => {
    const [value, setValue] = useState(""); 
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log('rendering ', {state});

    const submit = (e) => {
      e.preventDefault();
      console.log("value : ", value);
      if(!value.trim()){
         return;
      }
      const id = Math.random().toString();
      const todo = { title : value , completed : false, id};
      console.log('Todo : ', todo);
      dispatch({ type: 'todo/add', payload: todo});
      setValue("");
    }
    return(
        <>
        <form onSubmit={submit}>
            <input value={value} onChange={(e) =>  setValue(e.target.value)}></input>
          <button type="submit">Enivar</button>
        </form>

        <button onClick={() => dispatch({ type: 'todo/add'})}>Mostrar todos</button>
        <button>Completados</button>
        <button>Incompletados</button>
        <ul>
           { state && state.entities.map( todo => (
               <TodoItem key={todo.id} {...todo}></TodoItem>
           ))}
        </ul>
        </>
    )
}
export default App;



