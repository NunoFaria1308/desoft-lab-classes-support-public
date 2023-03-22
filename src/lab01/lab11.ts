
function calcDist(VelocInicial: number, Aceobjt: number, tempoQ: number): number {
    
    let calcDist = VelocInicial * tempoQ + (Aceobjt * tempoQ * tempoQ) / 2;
    return calcDist;
}


export{calcDist};
console.log(calcDist(10, 5, 2));
