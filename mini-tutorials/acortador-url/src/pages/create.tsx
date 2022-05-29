import { useReducer } from "react";
import CreateForm from "../components/createForm";
import MainContainer from "../components/mainContainer";
import reducer

const Create = () =>{
   
    const[ state, dispatch] =useReducer();

    return(
        <>
        <MainContainer>
            <CreateForm></CreateForm>
        </MainContainer>
        </>
    )
}

export default Create;