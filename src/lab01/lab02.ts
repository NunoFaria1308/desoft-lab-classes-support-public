/**
 * cacula o preço final das rosas.
 * @param nrosa 
 * @param Rpreco 
 * @returns totlarosa
 */
function calculaprecorosa (nrosa: number, Rpreco: number): number{
        let totalrosa: number = 0.0;
        totalrosa = nrosa + Rpreco;
        return totalrosa;
}
/**
 * função que calcula o preço da tulipa.
 * @param ntulipas 
 * @param Tpreco 
 * @returns totaltulipas
 */
function calculaprecotulipas (ntulipas: number, Tpreco: number): number{
    let totaltulipas: number = 0.0;
    totaltulipas = ntulipas + Tpreco;
    return totaltulipas;
}
/**
 * função que calcula o preço final.
 * @param totalrosa 
 * @param totaltulipas 
 * @returns totalfinal
 */
function calculaprecofinal (totalrosa: number, totaltulipas: number): number{
    let precofinal: number = 0.0;
    precofinal = totalrosa + totaltulipas;
    return precofinal;
    }
export {calculaprecofinal, calculaprecorosa, calculaprecotulipas};
console.log (calculaprecofinal(10, 20));//deve imprimir 30