import React ,{useState, useEffect} from "react";
import {iPeople} from '../../types/person';
import { mockPeople } from '../../mocks/people';

const People: React.FC = () => {

    const[loading, setLoading] = useState<boolean>(true);
    const[persons, setPersons] = useState<iPeople>([]);

     useEffect(() => {
       setPersons(mockPeople);
       setLoading(false);
     },[])

   return(
        <>
        <Container>
            
        </Container>
        </>

   )
}

export default People;