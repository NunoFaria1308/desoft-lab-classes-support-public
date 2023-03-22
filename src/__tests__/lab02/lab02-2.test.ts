// Importa a função verifvalor
import { verifvalor } from "../../lab02/lab02-2";

// Teste para valor menor que 8
test('valor menor que 8', () => {
  expect(verifvalor(5)).toBe(false);
});
// Teste para valor igual a 8
test('valor igual a 8', () => {
  expect(verifvalor(8)).toBe(false);
});
// Teste para valor maior que 8
test('valor maior que 8', () => {
  expect(verifvalor(10)).toBe(true);
});
