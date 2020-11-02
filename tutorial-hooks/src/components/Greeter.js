import React from 'react';

const Greeter = ({ name = 'Andres', age = 11 , excitement = 1}) => {
    
    const handleClickMostrar = () => {
        console.log("Hola mundo");
    }
    return (
        <div>
            <h1>Hi ther , {name} {"!.".repeat(excitement)}</h1>
            <p>You are {age}</p>
            <button onClick={handleClickMostrar}>Add mostrar data</button>
        </div>
    );
};

export default Greeter;