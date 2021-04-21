import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import VideoForm from "./components/Videos/VideoForm";

import { ChakraProvider, Box, Container, Heading,   Grid, Stack, Text } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box padding={4}>
        <Container
          borderRadius="sm"
          backgroundColor="white"
          boxShadow="md"
         >
        
          <Router>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/new-video" component={VideoForm}></Route>
            </Switch>
          </Router>
        </Container>
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
