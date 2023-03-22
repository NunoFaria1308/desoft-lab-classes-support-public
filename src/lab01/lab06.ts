function GrausF(fx: number, cy: number): number{
    let GrausF: number = 0;
    GrausF = 32+(9/5)* cy;
    return GrausF;
}

export {GrausF};
console.log(GrausF(0, 100));


