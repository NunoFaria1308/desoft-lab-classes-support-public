import { calcularDistancia } from "../../lab02/lab02-3"; 

describe('calcularDistancia', () => {
  it('deve retornar a distância correta entre dois pontos', () => {
    
    expect(calcularDistancia(0, 0, 0, 0)).toBe(0); 
    expect(calcularDistancia(0, 0, 3, 4)).toBe(5); 
    expect(calcularDistancia(-1, 1, 2, -3)).toBeCloseTo(5.83, 2); 
  });
});
