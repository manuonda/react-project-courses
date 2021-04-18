interface Persona {
    nombre: string;
    apellido?: string;
}

function saludar(persona:Persona) {
    console.log(`Saludo ${persona.nombre} ,apellido ${persona.apellido}`);
}

let persona1 = { nombre: "david", apellido: "garcia"};
let persona2 = { nombre :"david"};
saludar(persona1);
saludar(persona2);