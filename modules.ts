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

//Aqui namespace (basicamente es lo mismo, pero hoy en dia se usa module)

// Creas tu caja (namespace) llamada "Animalitos"
namespace Animalitos {
    // Dentro de la caja, pones a los gatos
    export class Gato {
        maullar() {
            console.log("¡Miau!");
        }
    }

    // También pones a los perros
    export class Perro {
        ladrar() {
            console.log("¡Guau!");
        }
    }
}

// Ahora, puedes jugar con tus animalitos desde fuera del namespace
const miGato = new Animalitos.Gato();
miGato.maullar();

const miPerro = new Animalitos.Perro();
miPerro.ladrar();
