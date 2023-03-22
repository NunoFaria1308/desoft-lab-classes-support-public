function calculaA(Rx: number, Haltura: number): number {
    let calculaA: number = 0.00;
    calculaA = (Rx * 2) * 3.14;
    return calculaA;
}
function calculaV(Rx: number, calculaA: number, Haltura: number): number {
    let calculaV: number = 0.00;
    calculaV = calculaA * Haltura;
    return calculaV;
}
export { calculaA, calculaV };

console.log(calculaV,calculaA); 



