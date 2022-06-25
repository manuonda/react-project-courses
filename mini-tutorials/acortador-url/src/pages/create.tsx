import { useReducer,useEffect } from "react";
import CreateForm from "../components/createForm";
import MainContainer from "../components/mainContainer";
import { Actions } from "../reducer/actions";
import   useReducerApp from "../reducer/reducerAcortador";
import { AcortadorUrl } from "../types";

const Create = () =>{

    const [state, dispatch] = useReducerApp();
    
    useEffect(() => {
       dispatch({ type: Actions.LOAD})
    }, [])
    
    return(
        <>
        <MainContainer>
            <CreateForm dispatch={dispatch}></CreateForm>
            <div>
                {state.items && state.items.map( (item: AcortadorUrl) => (
                    <div key={item.shortUrl}>
                    <div>{item.url}</div>
                    <div>{item.shortUrl}</div>
                    <div>{item.views}</div>
                    </div>
                ))}
            </div>
        </MainContainer>
        </>
    )
}

export default Create;