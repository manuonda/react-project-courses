import React from 'react';
import Input from "./Input";
import Card from "./Card";
import Container from "./Container";
import Button from "./Button";
import UseFormulario from "../hooks/UseFormularioHook";


export const UseForm = ({ submit }) => {
    const [formulario, handleChange,reset] = UseFormulario({
        name: "", 
        apellido: "" ,
        email: ""});

    const handleSubmit =(ev) => {
        ev.preventDefault();
        submit(formulario);
        reset();
    }    
    return (
        <div>
             <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          name="name"
          placeholder="Nombre"
          value={formulario.name}
          onChange={handleChange}
        />
        <Input
          label="Apellido"
          name="apellido"
          placeholder="Apellido"
          value={formulario.apellido}
          onChange={handleChange}
        />
          <Input
          label="Email"
          name="email"
          placeholder="Email"
          value={formulario.email}
          onChange={handleChange}
        />
        <Button>Enviar</Button>
      </form>
        </div>
    )
}


export default UseForm;
