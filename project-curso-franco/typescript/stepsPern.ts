// cantidad de escalones -> n
// cantidad maxima de escalones a subir(al mismo tiempo) 2 


interface iStepsPermutation {
    n: number,
    memo?: Record<number, number>
}
const stepsPermutation = ({n , memo ={}}: iStepsPermutation):number => {
    if ( n in memo) return memo[n];
    if ( n === 1) return 1;
    if ( n ===  2) return 2;
    memo[n] = stepsPermutation({n : n -1 , memo}) + stepsPermutation({ n: n-2, memo});
    return memo[n];
}