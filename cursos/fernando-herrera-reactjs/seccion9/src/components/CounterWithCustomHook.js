import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    
    const { state, increment, decrement , reset } = useCounter();
    console.log(state,increment, decrement);
    return (
        <>
          <h1>Counter with hook : {state}</h1>
          <hr></hr>

          <button onClick={increment} className="btn btn-primary">+1</button>  
          <button onClick={decrement} className="btn btn-secondary">-1</button>
          <button onClick={reset} className="btn btn-secondary">reset</button>
        </>
    )
}
