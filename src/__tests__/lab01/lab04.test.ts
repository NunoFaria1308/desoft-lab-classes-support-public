import { calculaPtro } from "../../lab01/lab04";

describe('calculaPtro', () => {
    test('calcular o Perimetro do quadrado', () => {  
      // Arrange
      const Ax = 5;
      const Bx = 10;
      const expected = 15;
      // Act
      const result = calculaPtro(Ax, Bx);  
      //Assert  
      expect(result).toBe(expected);
    });
  });
  