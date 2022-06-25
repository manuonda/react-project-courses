import { useReducer } from "react";
import { Usuario } from "../types"



// Establezco el state
interface FormState{
   inputValues: Usuario      
}


type ActionType  = {
   type: "change_value",
   payload: {
     inputName: string,
     inputValue: string
   }
} | {
    type: "clear"
}


const INITIAL_STATE = {
   documento: 0,
   nombre: '',
   apellido:'' 
}



export const FormReducer = (state: FormState["inputValues"], action: ActionType)  => {

    switch(action.type) {
       case "change_value" : 
        const { inputValue, inputName} = action.payload;
        return {
            ...state,
            [inputName]: inputValue
        }
        case "clear":
            return INITIAL_STATE;
    }  
}

// Creo el reducer en el metodo para llamarlo en otro componente
const useReducerUsuarioForm =() => {
     return useReducer(FormReducer, INITIAL_STATE);
}

export default useReducerUsuarioForm;