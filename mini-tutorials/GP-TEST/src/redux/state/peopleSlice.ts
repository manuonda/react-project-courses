import { Person } from "@/models";
import { createSlice } from "@reduxjs/toolkit";


export interface People {
    people: Person[]
}

const initialState : People = {
    people:[]
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers : {

    }
})

export const {} =  peopleSlice.actions;
export default peopleSlice.reducer;