function mediaPesada(nota1: number, peso1: number, nota2: number, peso2: number, nota3: number, peso3: number): number {
    const soma = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    const pesoTotal = peso1 + peso2 + peso3;
    const media = soma / pesoTotal;
    return media;
  }
  const media = mediaPesada(7.5, 2, 8.0, 3, 6.5, 1);
  console.log(mediaPesada);
  export{mediaPesada}