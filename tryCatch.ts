function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new TypeError("No se puede dividir por cero");
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0);
    console.log(resultado);
} catch (error: any) {
    console.error("Error:", error.message);
}
