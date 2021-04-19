interface IPersona<T> {
  nombre: T
}

const obj: IPersona<string> = { nombre:"david" };
const obj1: IPersona<number> = { nombre :23 };

console.log(obj1.nombre);
console.log(obj.nombre);