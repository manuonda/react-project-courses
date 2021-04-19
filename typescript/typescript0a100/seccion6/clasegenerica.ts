class Persona<T> {
    name: T;
    getName: (name: T) => T 
}

const persona1 = new Persona<string>();
persona1.name ="david";
persona1.getName = function(x) { return x};

const persona2 = new Persona<number>();
persona2.name =34;
persona2.getName = function(x) {return x};
persona2.getName(23)



console.log(persona1.getName("nombre"));
console.log(persona2.getName(23));