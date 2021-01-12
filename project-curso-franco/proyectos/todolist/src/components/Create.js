import React , {useState} from 'react'
import {Button,Form} from "react-bootstrap"
import shortid from "shortid"


const Create = ({ addActivity }) => {
    
    const initialState = {
        id: "",
        work: "",
        state:false
    }

    const handleWork = (e) => {
        const {name, value} = e.target;
        setWork({
            ...work,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
     e.preventDefault();
     const {work} = work;
     
      if ( work.trim() === "") return;

       const workObject = {
           ...work, // { id:"", work:"tare", state:false}
           id: shortid()
       }
       setWork(initialState);
       addActivity(workObject)

    }

    const[work, setWork] = useState(initialState);

    return (
        <>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
             type="text"
             name="work"
             value={work.work}
             onChange={handleWork}
            >
            </Form.Control> 
          </Form.Group>
         <Button type="submit" variant="primary">
             Agregar Tarea
         </Button>
        </Form>
                
        </>
    )
}

export default Create
