import { obterDigito1 } from "../../lab02/lab02-4"; 
describe('obterDigito1', () => {
  it('deve retornar o primeiro dígito do número', () => {
    expect(obterDigito1(123)).toEqual(1);
    expect(obterDigito1(456)).toEqual(4);
    expect(obterDigito1(789)).toEqual(7);
  });
  it('deve retornar -1 se o número não tem 3 dígitos', () => {
    expect(obterDigito1(12)).toEqual(-1);
    expect(obterDigito1(1234)).toEqual(-1);
    expect(obterDigito1(98765)).toEqual(-1);
  });
});
