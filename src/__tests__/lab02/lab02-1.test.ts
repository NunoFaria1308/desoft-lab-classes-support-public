import { mediaPesada } from "../../lab02/lab02-1";
  describe('mediaPesada', () => {
    it('calcula a média ponderada corretamente', () => {
     // Arrange
      const nota1 = 7.5;
      const nota2 = 8.0;
      const nota3 = 6.5;
      const peso1 = 2;
      const peso2 = 3;
      const peso3 = 1;
     // Act
      const mediaEsperada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
     // Assert 
      expect(mediaPesada(nota1, peso1, nota2, peso2, nota3, peso3)).toBe(mediaEsperada);
    });
  });
  