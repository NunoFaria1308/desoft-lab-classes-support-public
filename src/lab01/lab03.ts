function calculaA(Rx: number, Haltura: number): number {
    let calculaA: number = 0.0;
    let PI: number = 3.14;
    calculaA = (Rx * 2) * PI;
    return calculaA;
}
function calculaV(Rx: number, calculaA: number, Haltura: number): number {
    let calculaV: number = 0.0;
    calculaV = calculaA * Haltura;
    return calculaV;
}
export { calculaA, calculaV };

console.log(calculaV,calculaA); 
