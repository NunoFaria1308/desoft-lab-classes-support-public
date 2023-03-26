function calculaVolumeCilindro(raio: number, altura: number): number {
    const pi = Math.PI;
    const raioQuadrado = raio ** 2;
    const volume = pi * raioQuadrado * altura;
    return volume;
  }
  const raio = 5;
  const altura = 10;
  const volume = calculaVolumeCilindro(raio, altura);
  console.log(volume);

export { calculaVolumeCilindro,volume};

 



