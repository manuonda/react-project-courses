import React from "react";
import { Button } from "./components/Button";
import "./main.css";
const elements = [
  { id: 1, name: "david" },
  { id: 2, name: "andres" },
  { id: 3, name: "rodolfo" },
];

export const App = () => {
  return (
    <div>
      Hola Mundo
      <Button onClick={() => console.log("hola mundo")}>Enviar</Button>
      <ul>
        {elements.map((value) => (
          <li key={value.id}>{value.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
