import { calculaDistanciapostes } from "../../lab01/lab13"; 

describe("Teste  calculaDistanciapostes", () => {
  it("Deve retornar a distância correta para os valores 40 e 60", () => {
    const lado40 = 40;
    const lado60 = 60;
    const distanciaEsperada = 69.28;

    const resultado = calculaDistanciapostes(lado40, lado60);

    expect(resultado).toBeCloseTo(distanciaEsperada, 2);
  });
});
