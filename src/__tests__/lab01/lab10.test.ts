import { Expr1 } from "../../lab01/lab10"; 

describe('Teste Expr1', () => {
  test('calcula a expressão corretamente', () => {
    // Arrange
    const x = 2;
    const expected = -1;

    // Act
    const result = Expr1(x);
    // Assert
    expect(result).toBe(expected);
  });
});
