import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../type";

export interface TodoState {
    todos : ITodo[]
}

export const initState : TodoState = {
  todos: []
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState: initState,
    reducers : {
      getTodos : (state, action) => {
        
      }
    }

});


export default todoSlice.reducer; 