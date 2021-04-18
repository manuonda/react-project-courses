class Persona {
 
    private nombre: string;

    constructor(_nombre:string){
        this.nombre = _nombre;
    }

    set setNombre(_nombre:string) {
        this.nombre = _nombre;
    }
    get getNombre():string{
        return this.nombre;
    }

}

const persona = new Persona("david");
console.log(persona.getNombre);