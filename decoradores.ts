// Definición del decorador
function decorarPastel(target: any) {
    // Agrega una propiedad llamada 'esEspecial' a la clase y le asigna true
    target.esEspecial = true;
}

// Aplica el decorador a la clase Pastel
@decorarPastel
class Pastel {
    sabor: string;

    constructor(sabor: string) {
        this.sabor = sabor;
    }
}

// Uso de la propiedad agregada por el decorador
console.log(new Pastel("Chocolate").esEspecial);  // Imprime true
