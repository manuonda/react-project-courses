function saludar(persona) {
    console.log("Saludo " + persona.nombre + " ,apellido " + persona.apellido);
}
var persona1 = { nombre: "david", apellido: "garcia" };
var persona2 = { nombre: "david" };
saludar(persona1);
saludar(persona2);
