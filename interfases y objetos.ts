//? Interfases y objetos

// las interfases se utilizan para tipar de forma explicita un objeto, pero TS es de tipado inferido, osea que el compilador deduce de acuerdo a las inicializacion que tipo puede ser.

interface Persona {
    nombre : string,
    apellido : string,
    edad : number,
    hobbies : Hobby[]
}

interface Hobby{
    nombre : string;
}

let matias : Persona = {
    nombre : 'Matias',
    apellido : 'Rodriguez',
    edad : 27,
    hobbies : []
}

//de esa forma con una interfase puedo tipar.
console.log(matias.apellido);

//?Puedo extender lo que estoy usando en una interface, en otra.. (para no repetir codigo)
interface Estudiante extends Persona{
    // nombre : string,
    // apellido : string,
    // edad : number
    esActivo?: boolean,  //!al tener el ? se considera opcional
    saluda : (a :string) => void  //con void indico que el resultado de la fn es undefined.
}
let a : string = "loco"
let franco : Estudiante = {
    nombre : "Francisco",
    apellido : "Lonas",
    edad : 34,
    saluda : (a) => {console.log("hola", a)},
    hobbies : [{nombre : 'leer'}]

}

franco.saluda(a)


//Otro ejemplo de interfaces
// Definir una interfaz para un coche
interface Coche {
    marca: string;
    modelo: string;
    velocidadMaxima: number;
}

// Usar la interfaz para definir un objeto de tipo coche
const miCoche: Coche = {
    marca: "Toyota",
    modelo: "Camry",
    velocidadMaxima: 200,
};

//Otro ejemplo de tipos
// Definir un tipo para un número o una cadena
type NumeroOTexto = number | string;

// Usar el tipo para declarar una variable
let dato: NumeroOTexto;
dato = 42;        // Válido
dato = "Hola";    // Válido
dato = true;      // Error, ya que boolean no está permitido


