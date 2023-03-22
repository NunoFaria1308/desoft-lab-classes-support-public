function calculaprecorosa (nrosa: number, Rpreco: number): number{
        let totalr: number = 0.0;
        totalr = nrosa + Rpreco;
        return totalr;
}
function calculaprecotulipas (ntulipas: number, Tpreco: number): number{
    let totalt: number = 0.0;
    totalt = ntulipas + Tpreco;
    return totalt;
}
function calculaprecofinal (totalr: number, totalt: number): number{
    let precofinal: number = 0.0;
    precofinal = totalr + totalt;
    return precofinal
}

export {calculaprecofinal, calculaprecorosa, calculaprecotulipas}
console.log (calculaprecofinal);