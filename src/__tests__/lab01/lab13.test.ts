import { calculaDistanciapostes } from "../../lab01/lab13"; 
describe('calculaDistanciapostes', () => {
  it('deve calcular a distância correta', () => {
  // Arrange
    const ladoA = 40;
    const ladoB = 60;
    const cos60 = 60;
    const rad60 = (cos60 * Math.PI) / 180;
    const cos60rad = Math.cos(rad60);
    const distanciaEsperada = Math.sqrt((ladoA ** 2) + (ladoB ** 2) - (2 * ladoA * ladoB * cos60rad));
   // Act
    const distanciaCalculada = calculaDistanciapostes(ladoA, ladoB, cos60);
     // Assert
    expect(distanciaCalculada).toBeCloseTo(distanciaEsperada, 0.0001);
  });
});
