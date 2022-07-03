import { createSlice } from "@reduxjs/toolkit";
import UserList from "../../components/UserList";



export const userSlice =  createSlice({
    name:"users",
    initialState: {
         users: []
    },
    reducers: {
         addUser: (state, action) => {
             state.users.push(action.payload);
         },
         deleteUser :(state, action) => {

         },
         updateUser: (state, action) => {

         }
    }
});

export const { addUser, deleteUser, updateUser} = userSlice.actions;

export default userSlice.reducer;


