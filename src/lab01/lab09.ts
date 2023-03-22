function calcveloze (Dist: number, tempreal: number): number{
  let calcveloze: number;
  calcveloze = Dist / tempreal;
  return calcveloze;
  }
function distM (Velocze: number, tempreal: number): number{
  let distM: number = 0.0;
  distM = tempreal * Velocze;
  return distM;
}
export {calcveloze, distM};

console.log(distM(20, 5));