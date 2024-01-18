// Unión de tipos: puede ser un número o una cadena
let numeroOTexto: number | string;

numeroOTexto = 10;        // Válido
numeroOTexto = "Hola";   // Válido
numeroOTexto = true;     // Error, ya que boolean no está permitido


// Definición de dos tipos
type TipoA = { propA: number };
type TipoB = { propB: string };

// Intersección de tipos: debe tener las propiedades de A y B
type TipoAB = TipoA & TipoB;

// Ejemplo de uso
let objetoAB: TipoAB = { propA: 1, propB: "dos" };

