interface iGridTraveler {
    m: number, // fila
    n: number  // columna, 
    memo?: Record<string, number>
}

interface iMemorizeGrid extends iGridTraveler{
    memo?:unknown
}


// 1: Caseo de grid traveler brute force(sin memorizacion) implements iGridTraveler
// 2 : Caso traveler memorizado implements i memorizeGrid
/**
 * "2,2" : 3
 * memorizar
 * @param param0 
 * @returns 
 */
// solucion por fuerza bruta -> O(2**n+m)
// solucion por memorizacion ->0(n*m)
const gridTraveler = ({m, n, memo={}}: iGridTraveler): number => {
    const key = `${m},${n}`;
    if ( key in memo) return memo[key];
    if ( m === 0 || n === 0) return 0;
    if ( m === 1 || n === 1) return 1;
    memo[key] =  gridTraveler({ m : m -1 ,n, memo}) + gridTraveler({ m, n: n-2, memo});
   return memo[key];
}

