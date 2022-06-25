import { useEffect , useState} from "react"
import { options } from "../type";

useEffect(() => {

},[])


export const hookFetch = async <T>(url: string, options?:options) => {
    
    const [data,setData] = useState<Array<T>>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [error, setError] = useState({});
    try {
      const response= await fetch(url, {
          options.method,

      });
      const body =   
      setLoading(false);       
    } catch (error) {
      setLoading(false);  
    }

    return [ loading, data]
}