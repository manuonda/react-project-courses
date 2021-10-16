import React,{useState} from 'react'
import './counter.css'

export const CounterApp = () => {   
    const [{counter1,counter2}, setCounter] = useState({
        counter1: 10,
        counter2:20
    })

    return (
        <div>
            <h1>Counter { 0 } </h1>
            <button className="btn btn-primary"
              onClick={()=> 
                 setCounter({
                     counter1: counter1 + 1
                 })  
               }
            >
                +1
            </button>
        </div>
    )
}
