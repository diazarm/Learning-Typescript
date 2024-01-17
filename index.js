//! DIA UNO 
// para compilar mi archivo de TS, depende de como lo haya instalado con npm por ejemplo:
//tsc   ---->  npm i -g typescript
//npx tsc  nombreDelArchivo
var Fases;
(function (Fases) {
    Fases[Fases["Primero"] = 0] = "Primero";
    Fases[Fases["Segundo"] = 1] = "Segundo";
    Fases[Fases["Tercero"] = 2] = "Tercero";
})(Fases || (Fases = {}));
console.log(Fases.Primero);
