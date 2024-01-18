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