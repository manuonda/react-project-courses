import React, {useState , useEffect} from 'react'
import { Redirect } from 'react-router'


const FOF = () => {

    const [redirect, setRedirect] = useState(false)
    
    useEffect(() => {
        setTimeout(() => setRedirect(true), 3000);  
          
    }, [])
    return (
        <div>
            { redirect ? (
               <Redirect to="/"></Redirect>  
            ): (
              <>
                 Make 4040 pages great again
              </>
              )
           }   
        </div>
    )
}

export default FOF
