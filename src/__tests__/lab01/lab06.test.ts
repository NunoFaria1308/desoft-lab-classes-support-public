import { GrausF } from "../../lab01/lab06"; 

describe('GrausF', () => {
    test('teste de temperatura em F', () => {
      // Arrange
      const celsius = 100;
      const expected = 212;
  
      // Act
      const result = GrausF(0, celsius);
  
      // Assert
      expect(result).toBe(expected);
    });
  });
  