import { calculaDistanciaPercorrida, calculaVelocidadeMedia } from '../../lab01/lab09';
describe('calculaVelocidadeMedia', () => {
  test('calcula velocidade media do Manuel', () => {
    // Arrange - velocidade media do Manuel
    const distancia = 20;
    const tempo = 15;
    // Act
    const velocidadeMedia = calculaVelocidadeMedia(distancia, tempo);
    // Assert
    expect(velocidadeMedia).toBe(1.3333333333333333);
  });
});
describe('calculaDistanciaPercorrida', () => {
  test('calcula distancia percorrida pelo Ze', () => {
    // Arrange - distancia percorrida pelo Ze
    const velocidadeMedia = 20;
    const tempo = 5;
    // Act
    const distanciaPercorrida = calculaDistanciaPercorrida(velocidadeMedia, tempo);
    // Assert
    expect(distanciaPercorrida).toBe(100);
  });
});