//Los modulos sirven para guardar codigo dentro del modulo (como si fuese una caja para utilizarlos cuando sea necesario)

//Creo el modulo
module Saludos {
    export function saludarHola(){
        console.log("¡Buenas!");
    }
    export const numeroPi : number = 3.14
}

Saludos.saludarHola()
console.log(Saludos.numeroPi)