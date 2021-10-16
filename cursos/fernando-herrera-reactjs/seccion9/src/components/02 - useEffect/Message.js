import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    const[{x,y}, setCoors] = useState({
        x : 0 , y : 0 
    })

    useEffect(() => {

        const mouseMove = (e) => {
            console.log('mouseMove');
            setCoors({
                x :e.x,
                y: e.y
            })
        }
        console.log('componente montado');
       return() => {
        window.addEventListener('mousemove', mouseMove);   
        console.log('component desmontado')
       }
    },[])
    return (
        <div>
            <h1>You are great</h1>
            <br>
            </br>
            x : {x}, y {y}
        </div>
    )
}
