import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import "./theme.css";
import {Home} from "./pages/Home";

import {Provider as UserProvider} from "@/context/users/user.context";
import {Layout} from "@/components";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <Layout>
          <Home />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
