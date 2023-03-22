function calcveloze (Dist: number, tempreal: number): number{
  let Velocze: number = 0.0;
  Velocze = Dist / tempreal;
  return Velocze;
}
function distM (Velocze: number, tempreal: number): number{
  let distM: number = 0.0;
  distM = tempreal * Velocze;
  return distM;
}
export {calcveloze, distM};

console.log(distM(20, 5));