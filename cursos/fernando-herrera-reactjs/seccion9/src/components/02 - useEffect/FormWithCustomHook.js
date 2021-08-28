import React,{useState, useEffect} from 'react'
import { Message } from './Message';

export const FormWithCustomHook = () => {
    
    const[formState, setFormState] = useState({
        name:'',
        email:'',
        password: ''
    });
    const{ name, email , password } = formState;


    const handleInputChange = (e) =>{
        const { name, value} = e.target
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    
    return (

        <div>
        <h1>useEffect</h1>
        <div className="form-group">
          <input 
           type="text"
           name="name"
           className="form-control"
           value={name}
           onChange  = {handleInputChange}
          ></input>   
         </div>  
         <div className="form-group">
          <input 
           type="text"
           name="email"
           className="form-control"
           value={email}
           onChange  = {handleInputChange}
          ></input>    
          </div>
          <div className="form-group">
          <input 
           type="text"
           name="password"
           className="form-control"
           value={password}
           onChange  = {handleInputChange}
          ></input>    
         
        </div>    
        </div>
    )
}
