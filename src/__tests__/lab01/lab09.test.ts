import { calcDist } from "../../lab01/lab08"; 
import { distM } from "../../lab01/lab09";  

describe('Teste DistM', () => {
    test('calcula distância percorrida', () => {
      // Arrange
      const veloc = 20;
      const tempReal = 5;
      const expectedDist = 100;
      // Act
      const resultDist = distM(veloc, tempReal);
      // Assert
      expect(resultDist).toBe(expectedDist);
    });
  });
  