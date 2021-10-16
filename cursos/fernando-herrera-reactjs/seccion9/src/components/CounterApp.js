import React,{useState, useEffect} from 'react'

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })
    const { counter1, counter2}  = state;
    return (
        <div>
            <h1>{counter1}</h1>  
             <button onClick={(e) => 
              setCounter({
                   ...state,  
                 counter1 : counter1  + 1
              })}>
                  +1
              </button>
        </div>
    )
}
