var prueba = ["david", "garcia", "inforamcion"];
var numeros = [1, 2, 3, 4];
var collecionNumeros = [1, 3, 3, 4, 5];
for (var _i = 0, prueba_1 = prueba; _i < prueba_1.length; _i++) {
    var nombre = prueba_1[_i];
    console.log(nombre);
}
numeros.forEach(function (numero) { return console.log(numero); });
var encontrado = numeros.findIndex(function (x) { return x === 3; });
console.log("encontrado : " + encontrado);
