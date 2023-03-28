/**
 * calcular a velocidade media do mannuel
 * @param distancia 
 * @param tempo 
 * @returns velocidade media
 */
function calculaVelocidadeMedia(distancia: number, tempo: number): number {
  let velocidadeMedia: number = distancia / tempo;
  return velocidadeMedia;
  }
/**
 * função que calcula a distância percorrida pelo ze
 * @param velocidadeMedia 
 * @param tempo 
 * @returns distância percorrida
 */
function calculaDistanciaPercorrida(velocidadeMedia: number, tempo: number): number {
  let distanciaPercorrida: number = velocidadeMedia * tempo;
  return distanciaPercorrida;
}
export {calculaDistanciaPercorrida, calculaVelocidadeMedia};
console.log(calculaDistanciaPercorrida(20, 5)); // deve imprimir 100
console.log(calculaVelocidadeMedia(10, 1)); // deve imprimir 10
console.log(calculaVelocidadeMedia(100, 2)); // deve imprimir 45
