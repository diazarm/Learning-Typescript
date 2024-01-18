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

//? TIPO Protected (ya vimos las publicas, y las privadas.)
// las protected solo las puedo usar yo y mi descendencia, osea todas mis clases hijas.
// recordar el ejemplo del chocolate, privado solo lo como yo, protected, yo y mi desendencia y publico pa todos.

class Hincha {
    nombre :string;
    private edad :number;
    protected equipo :string;
    constructor(nombre: string, edad : number , equipo:string){
        this.nombre = nombre;
        this.edad = edad;
        this.equipo = equipo;
    }
    getEdad () {
        console.log(`La edad es ${this.edad}`);
    }
    getEquipo(){
        console.log( `${this.nombre} es hincha del equipo ${this.equipo}`)
    }
}

let jose = new Hincha("Jose", 33, "river");
jose.nombre
jose.getEdad()
jose.getEquipo()