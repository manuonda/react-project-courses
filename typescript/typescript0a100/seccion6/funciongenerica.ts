
function mostrat(dato:string):string{
  return dato;
}

function mostrarGenerica<T>(dato:T) :T  {
    return dato;
}

console.log(mostrarGenerica("hola"));
console.log(mostrarGenerica(23));

