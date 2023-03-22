function teoremaDeTales(altpredio: number, sombpredio: number, altupax:number, sombpax:number): number {
    if ((sombpredio - altpredio) !== 0 && (sombpax - altupax) !== 0) {
      return (altupax - sombpax) / (sombpredio - altpredio);
    } else {
      console.log("null");
      return sombpredio;
    }
  }
  
  export {teoremaDeTales};
  console.log(teoremaDeTales(2, 4, 3, 6));
  
  
   