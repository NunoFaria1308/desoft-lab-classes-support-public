import { calculaprecorosa } from "../../lab01/lab02"; 
import { calculaprecotulipas } from "../../lab01/lab02";
import { calculaprecofinal } from "../../lab01/lab02";

describe('calculaprecofinal', () => {
    test('calcular precço final do ramo', () => {
      // Arrange
      const totalr = 10;
      const totalt = 20;
      // Act
      const precofinal = calculaprecofinal(totalr, totalt);
      // Assert
      expect(precofinal).toBe(30);
    });
  });