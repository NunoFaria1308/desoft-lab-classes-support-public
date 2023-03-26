//calcular a distancia entre dois pontos lab02 exercico 3
function calcularDistancia(x1: number, y1: number, x2: number, y2: number): number {
    const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distancia;
  }
  
  export{calcularDistancia}
  console.log(calcularDistancia(1, 2, 4, 6)); // Output: 5