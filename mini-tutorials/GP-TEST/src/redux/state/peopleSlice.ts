import { LocalStorageTypes, Person } from "@/models";
import { getLocalStoraget, setLocalStorage } from "@/utils";
import { LocalHospitalTwoTone } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";


export interface People {
    people: Person[]
}

const initialState : People = {
    people:[]
}




export const peopleSlice = createSlice({
    name: 'people',
    initialState: localStorage.getItem(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStoraget(LocalStorageTypes.PEOPLE) as string) : initialState,
    reducers : {
        addPeople: (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state);
            return action.payload;
        }
    }
})

export const {addPeople} =  peopleSlice.actions;
export default peopleSlice;