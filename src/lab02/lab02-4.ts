function obterDigito1(numero: number): number {
    let digito1: number;
    if (numero < 100 || numero > 999) {
      console.log("Número não tem 3 dígitos");
      digito1 = -1;
    } else {
      const digito3 = numero % 10;
      const digito2 = Math.floor(numero / 10) % 10;
      digito1 = Math.floor(numero / 100) % 10;
    }
    return digito1;
  }
  console.log(obterDigito1(123));
  export {obterDigito1};