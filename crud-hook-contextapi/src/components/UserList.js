import React,{ useContext } from 'react';
import { Link } from 'react-router-dom'
import {
   ListGroup,
   ListGroupItem,
   Button
} from 'reactstrap'
import { GlobalStateContext } from '../context/GlobalState';

const UserList = () => {
    const{ users , dispatch } =  useContext(GlobalStateContext);
    console.log(users)


    return (
    
        <ListGroup className="mt-4">
            { users && users.length > 0? (
                <>
            { users.map((user) => (
                  <ListGroupItem  key={user.id} className="d-flex">
                  <strong>{user.name}</strong>
                  <div className="ml-auto">
                  <Link to={`/edit/${user.id}`} className="btn btn-warning mr-1">Edit</Link>
                  <Button type="button" onClick={() => dispatch({ type: 'DELETE_USER', payload: user.id })} color="danger">Delete</Button>
              </div>
              </ListGroupItem>
           
            ))}
                </>
            ) : (
                <>
                <label>No hay elementos</label>
                </>
            )}
            
          </ListGroup>
    );
};

export default UserList;