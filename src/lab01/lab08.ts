function calcDist (veloc: number, tempo: number): number{
    let calcDist: number = 0.0;
    calcDist = veloc * tempo;
    return calcDist
}
export {calcDist};
console.log (calcDist(10,10));