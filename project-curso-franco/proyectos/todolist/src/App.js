
import React,{useState} from 'react'
import {Container, Row, Col}  from "react-bootstrap"
import List from './components/List'
import Create from './components/Create'
import Header from './components/Header'


function App() {

  const [activities, setActivities] = useState([]) 
  
  const addActivity = (activity) => {
      setActivities([
       ...activities, activity 
      ])
  }

  const deleteActivity = 
  
  return (
      <Container>
        <Header></Header>
        <Row>
          <Col md={6}>
          <Create addActivity={addActivity}/>
          </Col>
        </Row>
        <List activities={activities}/>
      </Container>
      
  );
}

export default App;
