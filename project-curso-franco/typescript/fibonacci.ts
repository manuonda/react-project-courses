/* 1, 1, 2,3,5,8,13,21,34 ==> Solucion en recurrencia 
  an = an-1 + an -2;
*/
// O(n)
const fibonacci = (n : number ):number[] => {
    const elements: number[] = [1,1];
    for(let  i: number = 2 ;  i < n; i++) {
        const result = elements[i-1] + elements[i-2];
        console.log(' indice : ', i , ' resultado : ', result, 'element 1: ', elements[i-1] , 'element 2 : ', elements[i-2]);
        elements.push(result);
    }
    return elements;
}
console.log(new Date());
console.log(fibonacci(6));
console.log(new Date());


// Fibonacci recursive 0( 2 ** n ) : ver grafos 
const recursiveFib = ( n : number) : number => {
    if (n <= 2 ) return 1;
    return recursiveFib(n-1) + recursiveFib(n -2 );
}

console.log(5);

// 1 -  Agregar un objeto dentro de mi funcion recursiva
// 2 - 
/* {
    3:2, 
    4:3  
   }
   O(n)
*/
const memorizeFib = (n : number , memo: Record<number,number> = {}): number => {
    if (n in memo) return memo[n];
    if (n <= 2 ) return 1;
     memo[n] = memorizeFib(n-1, memo) + memorizeFib(n -2, memo);
    
     return memo[n];
}

//console.log(recursiveFib(50));
console.log(new Date());
console.log(memorizeFib(50));
console.log(new Date());