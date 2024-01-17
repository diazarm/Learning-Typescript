//?Arreglos y Tuplas
//Las tuplas es como un array, pero cada posicion tiene un tipo de dato determinado  y cada vez ingrese un dato en la tupla va a tener el tipo de dato en el lugar determinado.Ej: 

let persona : [string, number] = ['Marcelo', 46 ];
console.log(persona);

//Arreglo

let array : number[] = [1,2,43,4,5]
array.push(6)

let arregloNumeros : Array<number> = [2,5,8,4,6]
// esta es otra forma de tipar los arrays

let arregloString : string[] = ['marce', 'fran']
arregloString.push('Juan')

console.log(arregloString);
let mati = arregloString.shift()
console.log(typeof(mati));
console.log(arregloString);

