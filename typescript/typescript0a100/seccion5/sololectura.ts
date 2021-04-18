interface Persona {
    readonly firstname: string;
    apellido?: string;
}

function saludar(persona:Persona) {
    console.log(`Saludo ${persona.firstname} ,apellido ${persona.apellido}`);
}

let personaOne: Persona  = { firstname: "david", apellido: "garcia"};
// error => personaOne.firstname= "andres";
saludar(personaOne);