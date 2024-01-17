//! DIA UNO 
// para compilar mi archivo de TS, depende de como lo haya instalado con npm por ejemplo:
//tsc   ---->  npm i -g typescript
//?  npx tsc  nombreDelArchivo   para compilar el archivo TS, porq el browser no lee TS, si JS
//?  npx tsc --init  para crear el archivo tsconfig.json





enum Fases {
    Primero,
    Segundo,
    Tercero
}

console.log(Fases.Primero);

let variableAny: any = "Hola";
variableAny = 42; // Sin error, se permite asignar un número

let variableUnknown: unknown = "Hola";

// Se debe verificar el tipo antes de realizar operaciones
if (typeof variableUnknown === "string") {
  let longitud: number = variableUnknown.length; // Correcto, ya que se ha verificado el tipo
  console.log(longitud)
}

//console.log("sale la ea", variableUnknown );

