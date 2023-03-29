import { teoremaDeTales } from "../../lab01/lab12";

describe("Teorema de Tales", () => {
  it("Deve calcular corretamente o valor de x", () => {
    const altpredio = 2;
    const sombpredio = 4;
    const altupax = 3;
    const sombpax = 6;
    const resultadoEsperado = -1.5;
    const resultado = teoremaDeTales(altpredio, sombpredio, altupax, sombpax);
    expect(resultado).toEqual(resultadoEsperado);
  });
  it("Deve retornar null quando denominador é zero", () => {
    const altpredio = 2;
    const sombpredio = 4;
    const altupax = 6;
    const sombpax = 6;
    const resultadoEsperado = sombpredio;
    const resultado = teoremaDeTales(altpredio, sombpredio, altupax, sombpax);
    expect(resultado).toEqual(resultadoEsperado);
  });
});
