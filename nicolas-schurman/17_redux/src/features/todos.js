import { combineReducers } from "redux";
import { makeFetchingReducer, makeSetReducer} from "./utils";

export const setPending = () => {
    return {
        type: 'todos/pending'
    }
}



export const selectStatus = state => state.todos.status;

export const selectTodo = state => {
    const {todos: {entities}, filter} = state;
    if ( filter === 'complete') {
        return entities.filter( todo => todo.completed);
    } else if ( filter ==='incomplete') {
        return entities.filter ( todo => !todo.completed);
    }

    return entities;
}; 


export const setFullFilled = (payload) => ({type: 'todos/fulfilled', payload});

export const setError = (error) => ({type: 'todos/error' , error: error.message})

export const setTodoComplete = (payload) => ({type: 'todo/complete', payload });

export const setFilter = (payload) =>({ type: 'filter/set' , payload }); 


export const filterReducer = makeSetReducer(['filter/set']);



export const fetchingReducer= makeFetchingReducer(
    'todos/pending',
    'todos/fullfilled',
    'todos/error'
)

export const fulfilledReducer = (state,action) => {
    
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
     case 'todos/fulfilled' :{
         return action.payload;
     }

        default: 
        return state;
    }
}


export const reducer = combineReducers({
    todos: combineReducers({
        entities: todosReducer,
        status: fetchingReducer,
    }),
    filter: filterReducer,
})
