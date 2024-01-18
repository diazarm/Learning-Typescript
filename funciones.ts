//?Sintaxis se le asigna a cada parametro el tipo y al final al resultado, si le coloco | significa q es OR

function suma(a :number, b : number, c? :number) :number { //el ultimo number corresponde al resultado
    return a + b;
}

//en c? lo utilizo como opcional al tercer parametro.

function consoleguea() : void {
    console.log("Esto es una función que imprime en la consola");
    //en react se puede usar void cuando seteamos un estado.
}

function throwError(msg : string) :never {
    throw new Error(msg);//cuando queremos lanzar errores y se utiliza :never cuando sabemos que nunca va a terminar mi funcion.
}


let resultado = suma(2,2)

//?  generics functions

let arrayNumeros = [1,2,3,4]

let arrayString = ['a', 'b', 'c']

//si creo una funcion y le asigno any como tipo es una mala idea porque pierdo el tipado
//Ej. function fisrstElement(arr : any[]) {return arr[0]} No es conveniente.

function fisrstElement<Type>(arr: Type[]) : Type {
    return arr[0];
}

let elemento = fisrstElement(arrayNumeros) //implicito toma como tipado number, porque lo toma de arrayNumeros

let elementoString = fisrstElement<string>(arrayString) //explicito le digo que tipado tiene que usar

//Pluck function
// Definición de un objeto
interface Individuo {
    nombre: string;
    edad: number;
  }
  
  // Función que pluck (extrae) la propiedad 'nombre' de un objeto Persona
  function obtenerNombre(persona: Individuo): string {
    return persona.nombre;
  }
  
  // Ejemplo de uso
  const ejemploPersona: Individuo = { nombre: 'John', edad: 30 };
  const nombreExtraido: string = obtenerNombre(ejemploPersona);
  
  console.log(nombreExtraido); // Imprimirá 'John'
  