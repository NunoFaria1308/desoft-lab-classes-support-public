import { calculaprecorosa } from "../../lab01/lab02";
import { calculaprecotulipas } from "../../lab01/lab02";
import { calculaprecofinal } from "../../lab01/lab02";

describe('calculaprecorosa', () => {
  test('calcula o preço total das rosas', () => {
    // Arrange - teste rosas
    const nrosa = 5;
    const Rpreco = 10;
    // Act
    const totalrosa = calculaprecorosa(nrosa, Rpreco);
    // Assert
    expect(totalrosa).toBe(15);
  });
});

describe('calculaprecotulipas', () => {
  test('calcula o preço total das tulipas', () => {
    // Arrange - teste tulipas
    const ntulipas = 3;
    const Tpreco = 5;
    // Act
    const totaltulipas = calculaprecotulipas(ntulipas, Tpreco);
    // Assert
    expect(totaltulipas).toBe(8);
  });
});

describe('calculaprecofinal', () => {
  test('calcula o preço final', () => {
    // Arrange - teste final
    const totalrosa = 15;
    const totaltulipas = 8;
    // Act
    const precofinal = calculaprecofinal(totalrosa, totaltulipas);
    // Assert
    expect(precofinal).toBe(23);
  });
});

