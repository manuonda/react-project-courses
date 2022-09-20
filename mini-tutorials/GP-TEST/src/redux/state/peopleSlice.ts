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
    initialState: localStorage.getItem('people') ? JSON.parse(localStorage.getItem('people') as string) : initialState,
    reducers : {
        addPeople: (state, action) => {

        },
        removePeople : (state, action) => {

        },
        listPeople: (state, action) => {
            
        }
    }
})

export const {} =  peopleSlice.actions;
export default peopleSlice.reducer;