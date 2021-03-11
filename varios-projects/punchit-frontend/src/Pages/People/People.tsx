import React, { useState, useEffect } from "react";
import { iPeople, iPerson } from "../../types/person";
import { mockPeople } from "../../mocks/people";
import { Person } from "../../Components/Person";

import { Container } from "react-bootstrap";

const People: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [persons, setPersons] = useState<iPeople>([]);

  useEffect(() => {
    setPersons(mockPeople);
    setLoading(false);
  }, []);

  return (
    <Container>
      {!loading ? (
        persons &&
        persons.map((person: iPerson) => (
          <Person key={person.id} {...person}></Person>
        ))
      ) : (
        <div>Loading</div>
      )}
    </Container>
  );
};

export default People;
