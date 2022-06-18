import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Actions } from "../reducer/actions";
import useReducerApp from "../reducer/reducerAcortador";
import { AcortadorUrl } from "../types";

const Redirect = () => {   
  const[state, dispatch] = useReducerApp();

  useEffect(() => {
    const data = localStorage.getItem('urls');
    const params = useParams();

    if(data) {
      const items:Array<AcortadorUrl> = JSON.parse(data);
      const id = params.id;
      const item = items.find( i => i.shortUrl === id);
     
      if ( item) {
        setTimeout(() => {
           dispatch({type: Actions.LOAD_VIEW, payload: item});
           window.location.href = item.url;
        },3000);
      }
    }  
  },[]);

  return(
      <>Redirect</>
  )

}

export default Redirect;