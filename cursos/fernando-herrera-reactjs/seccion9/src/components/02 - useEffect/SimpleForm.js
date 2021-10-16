import React,{useState, useEffect} from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const[formState, setFormState] = useState({
        name:'',
        email:''
    });
    const{ name, email } = formState;

    useEffect(() =>{
      console.log("hey");
    },[]);


    useEffect(() =>{
        console.log("formState");
      },[formState])



    useEffect(() =>{
        console.log("email cambio");
      },[email])

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
          { name === '123' && <Message></Message>}       
        </div>    
        </div>
    )
}
