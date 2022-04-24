const iterate  = (arr:string[]):void  => {
    arr.forEach((a) => {
       console.log("a : ",a );
    });
}

console.log("iterate");

// factorial :  5! : 5*4*3*2*1
const factorial =  ( n: number) :  number => {
    if( n <=  1) return 1;
    return ( n * factorial(n-1));
}

console.log(factorial(4));


