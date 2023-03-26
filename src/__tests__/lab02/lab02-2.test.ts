import { verifvalor } from "../../lab02/lab02-2";

test('valor menor que 8', () => {
  expect(verifvalor(5)).toBe(false);
});

test('valor igual a 8', () => {
  expect(verifvalor(8)).toBe(false);
});

test('valor maior que 8', () => {
  expect(verifvalor(10)).toBe(true);
});
