import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

//creation of slice
export interface TaskState {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: []
}
export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {
       addTask: (state, action) => {
         console.log('add task ');
         const find = state.tasks.find( x => x.id === action.payload.id);
         if ( find !== undefined && find.id !== "") {
             const updateTasks = state.tasks.map((task) => {
                if ( task.id === action.payload.id) {
                    return {
                        ...action.payload 
                    }
                }else {
                    return {
                        ...task
                    }
                }
             });
             state.tasks = updateTasks;
         } else {
            state.tasks.push(action.payload);
         }
       },
       deleteTask : (state, action) => {
          console.log("delete Task : ");
          state.tasks.splice(state.tasks.indexOf(action.payload),1);
          //state.tasks = state.tasks.filter( x => x.id !== action.payload.id);
       },
      

    }
})
export const { addTask , deleteTask } = taskSlice.actions


export default taskSlice.reducer

