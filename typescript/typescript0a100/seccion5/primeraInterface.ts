interface Persona {
    nombre?:string;

}

function caminar(persona:Persona) {
    console.log("la persona : ", persona.nombre);
}

let persona = {nombre: "david"};

caminar(persona);
