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
console.log(Fases.Primero);
