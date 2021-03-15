import React from "react";
import {
  Container,
  Row,
  Col,
  Form
} from "react-bootstrap";

const Login: React.FC = () => {
  const handleLogin = (e: any) => {
    e.preventDefault();
    let { email, password } = e.target.elements;
    email = email.value.trim();
    password = password.value.trim();

    console.log("login");
  };

  return (
    <Container>
      <Row
        className="justity-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <Col md={6} sm={12}>
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label> Email * </Form.Label>
              <Form.Control name="email" type="email"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label> Password * </Form.Label>
              <Form.Control name="password" type="password" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
