import React from "react";
import { Col, CardGroup, Card } from "react-bootstrap";
import { iPerson } from "../types/person";

export const Person: React.FC<iPerson> = (person: iPerson) => {
  return (
    <Col md={3} sm={12}>
      <CardGroup>
        <Card.Img
          variant="top"
          style={{
            width: 350,
            height: "auto",
            margin: "0 auto",
            marginTop: 10,
          }}
          src={person.photo}
        />
        <Card.Body>
          <Card.Title>{person.name} {person.lastname}</Card.Title>
          <Card.Text>{person.description}</Card.Text>
        </Card.Body>
        <Card.Footer><small className="text-muted">{person.lastSeen}</small>
        </Card.Footer>
      </CardGroup>
    </Col>
  );
};
