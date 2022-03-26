import { useSelector , useDispatch} from'react-redux';
import { useState } from 'react';
import { combineReducers } from 'redux';

// const initialState = {
//     entities: [],
//     filter: 'all', /// complete, incomplete
// }

export const asyncMiddleware = store => next => action => {
    console.log("------------------------");
    console.log('store: ',store,'next: ', next, 'action : ', action);
    if ( typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    return next(action);
}



export const fetchThunk =  () => async dispatch => {
    console.log('soy un thunk');
    dispatch({ type: 'todos/pending'})
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await resp.json();
        const todos = data.slice(0,10);
        dispatch({type: 'todos/fulfilled', payload: todos});

    } catch (error) {
        dispatch({type: 'todos/error' , error: error.message});
    }
}

// Funciones puras 
export const filterReducer = (state = 'all', action) => {
    switch(action.type) {
        case 'filter/set' :
            return action.payload;
        default:
            return state;
    }
} 

export const todosReducer = (state = [], action) => {
    switch(action.type) {
        case 'todo/add': {
            console.log('todo/add ', state, action.payload);
            return  state.concat({...action.payload})
       };
       case 'todo/complete' : {
           const newTodos = state.map (todo => {
                if ( todo.id ===  action.payload.id) {
                    return {...todo, completed: !todo.completed}
                }
 
                return todo;
           });
 
          return newTodos ;
        };

        case 'todo'

        default: 
        return state;
    }
}


export const reducer = combineReducers({
    entities: todosReducer,
    filter: filterReducer,
})

// export const reducer = (state = initialState, action)  => {
//     console.log('reducer : ', state, action);
//     return {
//          entities: todosReducer( state.entities, action),
//          filter : filterReducer(state.filter, action),
//     }
// }

/**
 * 
 * @param {*} state 
 * @param {*} action : type , payload 
 * @returns 
 */
// export const reducer = (state = initialState, action) => {
     
//     switch(action.type) {
//       case 'todo/add': {
//            console.log('reducer!');
//            return {
//                ...state,
//                entities: state.entities.concat({...action.payload})
//            }
//       };break;
//       case 'todo/complete' : {
//           const newTodos = state.entities.map (todo => {
//                if ( todo.id ===  action.payload.id) {
//                    return {...todo, completed: !todo.completed}
//                }

//                return todo;
//           });

//          return {
//              ...state,
//              entities: newTodos
//          };
//       }
//       case 'filter/set': {
//             return {
//                   ...state,
//                   filter : action.payload
//             }
//         };break
          
//      }
//     return state;
// }


const selectTodo = state => {
    const {entities, filter} = state;
    if ( filter === 'complete') {
        return entities.filter( todo => todo.completed);
    } else if ( filter ==='incomplete') {
        return entities.filter ( todo => !todo.completed);
    }

    return entities;
}; 

const TodoItem = ({...todo}) => {
    const dispatch = useDispatch();
    return (
        <li
          style={{textDecoration: todo.completed? 'line-through':'none' }}
         onClick={() => dispatch({type: 'todo/complete', payload: todo })}
        >{todo.title}</li>
    )
}
const App = () => {
    const [value, setValue] = useState(""); 
    const dispatch = useDispatch();
    //devuelvo el metodo Global
    // permite seleccionar parte de nuestros estados
    const todos = useSelector( selectTodo);
    console.log('selectTodo');
   

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

        <button onClick={() => dispatch({ type: 'filter/set' , payload : 'all'})}>
            Mostrar todos
        </button>
        <button onClick={() => dispatch({ type:'filter/set', payload:'complete'})}>
         Completados</button>
        <button onClick={() => dispatch({ type:'filter/set', payload:'incomplete'})}>
            Incompletados</button>
            <button onClick={() => dispatch(fetchThunk())}>
            Fetch</button>
        <ul>
           { todos && todos.map( todo => (
               <TodoItem key={todo.id} {...todo}></TodoItem>
           ))}
        </ul>
        </>
    )
}
export default App;



