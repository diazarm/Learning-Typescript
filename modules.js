//Los modulos sirven para guardar codigo dentro del modulo (como si fuese una caja para utilizarlos cuando sea necesario)
//Creo el modulo
var Saludos;
(function (Saludos) {
    function saludarHola() {
        console.log("¡Buenas!");
    }
    Saludos.saludarHola = saludarHola;
    Saludos.numeroPi = 3.14;
})(Saludos || (Saludos = {}));
Saludos.saludarHola();
console.log(Saludos.numeroPi);
