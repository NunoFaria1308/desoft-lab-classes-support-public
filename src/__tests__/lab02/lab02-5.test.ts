import { numeroPar } from "../../lab02/lab02-5";
// Verifica se a função retorna true para números pares
test('Retorna true para números pares', () => {
    expect(numeroPar(2)).toBe(true);
    expect(numeroPar(4)).toBe(true);
    expect(numeroPar(100)).toBe(true);
  });
  
  // Verifica se a função retorna false para números ímpares
  test('Retorna false para números ímpares', () => {
    expect(numeroPar(3)).toBe(false);
    expect(numeroPar(5)).toBe(false);
    expect(numeroPar(101)).toBe(false);
  });
  