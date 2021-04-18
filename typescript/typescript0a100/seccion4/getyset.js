class Persona {
    constructor(_nombre) {
        this.nombre = _nombre;
    }
    set setNombre(_nombre) {
        this.nombre = _nombre;
    }
    get getNombre() {
        return this.nombre;
    }
}
const persona = new Persona("david");
console.log(persona.getNombre);
