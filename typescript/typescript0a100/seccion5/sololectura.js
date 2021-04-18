function saludar(persona) {
    console.log("Saludo " + persona.firstname + " ,apellido " + persona.apellido);
}
var personaOne = { firstname: "david", apellido: "garcia" };
personaOne.firstname = "andres";
saludar(personaOne);
