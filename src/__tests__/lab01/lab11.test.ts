import { calcDist } from "../../lab01/lab11";

describe('Teste calcDist', () => {
  test('teste calc alturo do edificio velocidadeinical de 10, acelação 5 tempo de queda 2 altura 30', () => {
    // Arrange
    const velocInicial = 10;
    const aceObjt = 5;
    const tempoQ = 2;
    const expectedDist = 30;
    // Act
    const resultDist = calcDist(velocInicial, aceObjt, tempoQ);
    // Assert
    expect(resultDist).toBe(expectedDist);
  });
});
