class Persona {
    nombre :string;
    edad :number;
    constructor(nombre: string, edad : number){
        this.nombre = nombre;
        this.edad = edad;
    }
}

//esta es la estructura de la clase.

class Animal {
    nombre :string;
    private edad :number;
    constructor(nombre: string, edad : number){
        this.nombre = nombre;
        this.edad = edad;
    }
    getEdad () {
        return `La edad es ${this.edad}`;
    }
}

let perro = new Animal("Perrito", 3);
perro.nombre
perro.getEdad()

//al  ser edad una propiedad privada, solo se puede acceder a travez de una funcion que esta dentro de la clase, si estuviera fuera de la clase, no se podria acceder.

export {}

