import { calculaA } from '../../lab01/lab03';
import { calculaV } from '../../lab01/lab03'; 

describe('calculaA', () => {
  test('calculates Area R=5', () => {
    // Arrange
    const Rx = 5;
    const Haltura = 10;
    const expected = 31.4 * Rx;
    // Act
    const result = calculaA(Rx, Haltura);
    // Assert
    expect(result).toBe(expected);
  });
});

describe('calculaV', () => {
  test('calcula volumefinal', () => {
    // Arrange
    const Rx = 5;
    const Haltura = 10;
    const expected = 31.4 * Rx * Haltura;

    // Act
    const result = calculaV(Rx, calculaA(Rx, Haltura), Haltura);

    // Assert
    expect(result).toBe(expected);
  });
});
