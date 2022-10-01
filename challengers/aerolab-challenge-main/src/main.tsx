import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import "./theme.css";
import {Layout} from "@/components";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <span>Hello Goncy</span>
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
