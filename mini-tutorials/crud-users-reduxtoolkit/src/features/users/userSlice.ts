import { createSlice } from "@reduxjs/toolkit";
import UserList from "../../components/UserList";
import { TUser } from "../../type";



export const userSlice =  createSlice({
    name:"users",
    initialState: {
         users: [] as TUser[]
    },
    reducers: {
         addUser: (state, action) => {
             state.users.push(action.payload);
         },
         deleteUser :(state, action) => {
           console.log("delete action payload ; ", action.payload);
           state.users.splice(action.payload,1);
         },
         updateUser: (state, action) => {
           const usersUpdate = state.users.map((user:TUser) => {
              if ( user.id === action.payload.id) {
                return {
                  ...action.payload
                }
              } else {
                return {
                  ...user
                }
              }    
           });

           state.users = usersUpdate;
         }
    }
});

export const { addUser, deleteUser, updateUser} = userSlice.actions;

export default userSlice.reducer;


