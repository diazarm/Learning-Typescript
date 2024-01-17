//! DIA UNO 
// para compilar mi archivo de TS, depende de como lo haya instalado con npm por ejemplo:
//tsc   ---->  npm i -g typescript
//?  npx tsc  nombreDelArchivo   para compilar el archivo TS, porq el browser no lee TS, si JS
//?  npx tsc --init  para crear el archivo tsconfig.json
var Fases;
(function (Fases) {
    Fases[Fases["Primero"] = 0] = "Primero";
    Fases[Fases["Segundo"] = 1] = "Segundo";
    Fases[Fases["Tercero"] = 2] = "Tercero";
})(Fases || (Fases = {}));
console.log("sale las fases",Fases.Primero);
var variableAny = "Hola";
variableAny = 42; // Sin error, se permite asignar un número
var variableUnknown = "Hola";
// Se debe verificar el tipo antes de realizar operaciones
if (typeof variableUnknown === "string") {
    var longitud = variableUnknown.length; // Correcto, ya que se ha verificado el tipo
    console.log(longitud);
}
console.log("sale la wea", variableUnknown);
