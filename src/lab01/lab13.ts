function calculaDistanciapostes(ladoA: number, ladoB: number, cos60: number): number {
  const rad60 = (cos60 * Math.PI) / 180; // converter o ângulo 60 de graus para radianos
  const cos60rad = Math.cos(rad60);// calcular o cosseno de 60 em radianos = 0.5
  const distancia = Math.sqrt((ladoA ** 2) + (ladoB ** 2) - (2 * ladoA * ladoB * cos60rad));
  return distancia;// retornar o valor da distância
}
const distancia = calculaDistanciapostes(40, 60, 60);
export {calculaDistanciapostes}
console.log(distancia);

