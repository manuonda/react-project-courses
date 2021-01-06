import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

const Counter = () => {
    return (
        <>
         <Row>
             <h3>My Counter</h3>
         </Row>

         <Row>
             <Col> <h4>Counter: </h4></Col>
             <Button variant={"primary"}
               onClick={}
             > +1</Button>
             <Button 
             variant={"secondary"}
              
             >  +1 </Button>
         </Row>
            
        </>
    )
}
export default Counter
