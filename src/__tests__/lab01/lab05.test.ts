import { calculahipot } from "../../lab01/lab05";

describe('calculahipot', () => {
  test('calculates hipot.de um tiangulo', () => {
    // Arrange
    const C1 = 3;
    const C2 = 4;
    const expected = 2 * (C1 + C2);
    // Act
    const result = calculahipot(0, C1, C2);
    // Assert
    expect(result).toBe(expected);
  });
});
