import React , {useState}from 'react'
import { Link , useHistory} from 'react-router-dom'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'


const Header = React.memo(({ handlerSearch}) => {
    
    const history = useHistory();
    const search = (ev) =>{
       ev.preventDefault()
       const [{ value }]  = ev.target;
       const trimvalue = value.trim()
       if( trimvalue ){
           handlerSearch(value)
           history.push("/products")
       }    
    }
    return (
        <>
         <Container>
             <Row>
                 <Col md={6}>
                   <Form onSubmit={search}>
                       <Form.Group>
                           <Form.Control 
                            type="text" 
                            name="search"
                            placeholder="Buscar..." />

                       </Form.Group>
                   </Form>

                 </Col>
             </Row>
         </Container>
         
        </>
    )
})

export default Header
