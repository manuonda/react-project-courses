import React, { useContext , useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { Link,useHistory } from 'react-router-dom';
import  {GlobalStateContext} from '../context/GlobalState'

const EditUser = (props) => {
    const { users,  dispatch } = useContext(GlobalStateContext)
    const [selectedUser, setSelectedUser] = useState({
        id:'',
        name:''
    })
    console.log('Users edit user ', users);
    const currentUserId = props.match.params.id;
    const history = useHistory();  

    
    useEffect(() =>{
       console.log('useEffect edit user');
       const user = users.find(user => user.id === parseInt(currentUserId));
       console.log(user)
       setSelectedUser(user);
    },[currentUserId, users ])

    const onSubmit = (ev) => {     
      ev.preventDefault()
      dispatch({type: 'EDIT_USER', payload: selectedUser});
      history.push("/") 
    }  

    const onChange = (e) => {
        setSelectedUser({...selectedUser,[e.target.name]:e.target.value});
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" onChange={onChange} placeholder="Enter Name" 
                 value={selectedUser.name} name="name"></Input>
            </FormGroup>
            <Button type="submit">Send</Button>
            <Link to="/" className="btn btn-danger m1">Back</Link>
        </Form>
    );
};

export default EditUser;