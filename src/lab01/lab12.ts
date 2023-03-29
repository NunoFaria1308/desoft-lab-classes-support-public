function teoremaDeTales({ altpredio, sombpredio, altupax, sombpax }: { altpredio: number; sombpredio: number; altupax: number; sombpax: number; }): number {
    if ((sombpredio - altpredio) !== 0 && (sombpax - altupax) !== 0) {
      return (altupax - sombpax) / (sombpredio - altpredio);
    } else {
      console.log( Error );
      return sombpredio;
    
    }
  }
  export {teoremaDeTales};
  console.log(teoremaDeTales({ altpredio: 2, sombpredio: 4, altupax: 3, sombpax: 6 }));
  
  
   