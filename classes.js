var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Persona;
}());
//esta es la estructura de la clase.
var Animal = /** @class */ (function () {
    function Animal(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Animal.prototype.getEdad = function () {
        return "La edad es ".concat(this.edad);
    };
    return Animal;
}());
var perro = new Persona("Perrito", 3);
perro.nombre;
