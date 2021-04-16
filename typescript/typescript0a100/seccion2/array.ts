let prueba : string[] = ["david","garcia","inforamcion"];
let numeros: number[] = [1,2,3,4];

let collecionNumeros: Array<number> = [1,3,3,4,5];

for( let nombre of prueba) {
    console.log(nombre);
}

numeros.forEach((numero: number) => console.log(numero));
let encontrado = numeros.findIndex( x => x === 3);
console.log(`encontrado : ${encontrado}`);
