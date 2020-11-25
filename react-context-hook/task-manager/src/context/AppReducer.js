export const initialState = {
    tasks: [],
    item:  {
        id: null,
        title:''
    }
}

export const AppReducer = (state, action) => {
    
    console.log(state);
    console.log('payload data : ', action.payload);
    switch(action.type) {
        case 'ADD_TASK' : 
        console.log('STATE ADD', state.item);
        return {
            tasks:[...state.tasks, action.payload],
            item: {
                id:1,
                title:'hiosf'
            }
        }
        case 'DELETE_TASK':
            return{
                ...state,
                item: state.tasks.filter(x => x.id !== action.payload)
            }
        case  'EDIT_TASK':
            const taskSearch = action.payload;
            const tasksUpdate = state.tasks.filter((task) => {
                if ( task.id === taskSearch.id){
                    return taskSearch.id;
                }
                return task;
            });
            state.item = null;
            return {
                tasks: [...tasksUpdate],
            }
        case 'FIND_TASK':
            console.log('FIND_TASK : ', action.payload);
            const findTask = state.tasks.find(x => x.id === action.payload);
            console.log('findTask : ', findTask);
            return {
                tasks: state.tasks,
                item: findTask
            }
        default: 
         return state;
    }
}