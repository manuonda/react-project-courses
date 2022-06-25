import React, { useState } from "react";
import { Actions, ActionsAcortador } from "../reducer/actions";
import useReducerApp from "../reducer/reducerAcortador";


type ICreateFormProps = {
    dispatch: React.Dispatch<ActionsAcortador>
}

const CreateForm  = ( {dispatch}: ICreateFormProps )=>{
   
    const [url, setUrl] = useState<string>("");
    const acortadorReducer = useReducerApp();
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
       const value = e.target.value;
       setUrl(value);
   }

   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       dispatch({ type: Actions.ADD, payload: url});
   }

   return(<>
     <form onSubmit={handleSubmit}>
         <input value={url} onChange={handleChange}></input>
         <button type="submit">Create Url</button>
     </form>
   </>)
}
export default CreateForm;