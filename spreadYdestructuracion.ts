
//?Desestructuración de arrays
const colores = ["rojo", "verde", "azul"];

//Extraer elementos del array
const [color1, color2] = colores;

console.log(color1);  // Imprime: rojo
console.log(color2);  // Imprime: verde


//?Desestructuración de objetos
const personax  = { nombre1: "Juan", edad1: 30, ciudad1: "Madrid" };

//Extraer propiedades del objeto
const { nombre1, edad1 } = personax;

console.log(nombre1);  // Imprime: Juan
console.log(edad1);    // Imprime: 30



// Spread con objetos
const persona2 = { nombre: "Juan", edad: 30 };
const detallesPersona = { ciudad: "Madrid", trabajo: "Programador" };

// Combina ambos objetos
const personaCompleta = { ...persona2, ...detallesPersona };

console.log(personaCompleta);
// Imprime: { nombre: "Juan", edad: 30, ciudad: "Madrid", trabajo: "Programador" }



// Spread con arrays
const frutas = ["manzana", "pera"];
const masFrutas = ["plátano", "fresa"];

// Combina ambos arrays
const todasLasFrutas = [...frutas, ...masFrutas];

console.log(todasLasFrutas);  // Imprime: ["manzana", "pera", "plátano", "fresa"]
