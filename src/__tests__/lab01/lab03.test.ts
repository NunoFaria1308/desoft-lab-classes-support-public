import { calculaVolumeCilindro } from '../../lab01/lab03';
import { volume } from '../../lab01/lab03'; 

describe('calculaVolumeCilindro', () => {
  it('raio 5 area 10 volume 785... ', () => {
    // Arrange
    const expected = 785.3981633974483;
    // Act
    const result = calculaVolumeCilindro(5, 10);
    // Assert 
    expect(result).toBe(expected);
  });
});