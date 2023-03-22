import { calcDist } from "../../lab01/lab08"; 

describe('calcDist', () => {
    test('calculates the distance', () => {
      // Arrange
      const veloc = 10;
      const tempo = 5;
      const expected = 50;
      // Act
      const result = calcDist(veloc, tempo);
      // Assert
      expect(result).toBe(expected);
    });
  });
  