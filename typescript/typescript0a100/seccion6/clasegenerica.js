var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());
var persona1 = new Persona();
persona1.name = "david";
persona1.getName = function (x) { return x; };
var persona2 = new Persona();
persona2.name = 34;
persona2.getName = function (x) { return x; };
persona2.getName(23);
console.log(persona1.getName("nombre"));
console.log(persona2.getName(23));
