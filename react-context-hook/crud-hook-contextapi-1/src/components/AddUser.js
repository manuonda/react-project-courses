import React, {  useState, useContext } from 'react';
import {
 Form,
 FormGroup,
 Label,
 Input,
 Button
} from 'reactstrap'
import { Link , useHistory} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import  { GlobalStateContext}  from '../context/GlobalState'


const AddUser = () => {
    
    const [name , setName] = useState('')
    const { dispatch } = useContext(GlobalStateContext)
    const history = useHistory();  
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuidv4(),
            name:name
        }
        dispatch({ type: 'ADD_USER' , payload : newUser});
        history.push("/")
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger">Back</Link>         
            
        </Form>
    );
};

export default AddUser;