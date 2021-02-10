import React, { useState, useContext } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../context/authContext";
import { schema } from "./schema";
import {username , password } from '../../constants'

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(initialState);
  const { auth, authenticate } = useContext(AuthContext);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (e) => {
    console.log("informacion");
    console.log(user);
    const { username,  password } = user;
    
  };

  const handleUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <Form.Group>
              <Form.Control
                ref={register}
                type="text"
                name="username"
                onChange={handleUser}
                placeholder="Usuario"
              ></Form.Control>
              <label className="text-danger">{errors.username?.message}</label>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                ref={register}
                name="password"
                onChange={handleUser}
                placeholder="Password"
              />
              <label className="text-danger">{errors.username?.message}</label>
            </Form.Group>
            <Button type="submit" variant="dark">
              Acceder
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};
export default Login;
