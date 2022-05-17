// creamos un type para el action

import { useReducer } from "react";
import { Sub } from "../types";


// definimo type varios
type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName:string,
        inputValue: string
    }
} | {
    type: "clear"
}

interface FormState {
    inputValues : Sub
}



const INITIAL_STATE = {
    nick: '',
    avatar: '',
    subMonths: 0,
    description: ''
}



const formReducer = ( state:FormState["inputValues"], action: FormReducerAction) => {
    switch(action.type) {
        case "change_value": 
          const {inputName, inputValue} = action.payload;
          return{
              ...state,
              [inputName]: inputValue
          };
        case "clear" :
            return INITIAL_STATE;
    }
}

const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE);
}

export default useNewSubForm;
