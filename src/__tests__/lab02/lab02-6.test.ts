import { calculaFx } from "../../lab02/lab02-6";

describe("calculaFx", () => {
// Arrange
    it("deve retornar x se x < 0", () => {
    expect(calculaFx(-5)).toEqual(-5);
    expect(calculaFx(-10)).toEqual(-10);
  });
// Act
  it("deve retornar 0 se x = 0", () => {
    expect(calculaFx(0)).toEqual(0);
  });
 //Assert 
  it("deve retornar x^2 - 2x se x > 0", () => {
    expect(calculaFx(2)).toEqual(0);
    expect(calculaFx(5)).toEqual(15);
  });
});
