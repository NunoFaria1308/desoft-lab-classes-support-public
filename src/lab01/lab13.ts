function calculaDistanciapostes(lado40: number, lado60: number): number {
    const distancia = Math.sqrt(lado40 ** 2 + lado60 ** 2 - 0.5);
    return distancia;
  }
  export{calculaDistanciapostes};
  console.log(calculaDistanciapostes(40, 60)); // output: 69.28
  