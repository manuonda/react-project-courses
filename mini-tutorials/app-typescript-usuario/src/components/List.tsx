import { IPVersion } from 'net'
import React from 'react'
import { Usuario } from '../types'

interface Iprops {
    usuarios: Array<Usuario>
}

 
export const List = ({usuarios}: Iprops) => {
  
  return (
       <>
          <ul>
            {
              usuarios && usuarios.map( usuario => (
                <>
                <li key={usuario.documento}>
                   <div className="">
                     <p>{usuario.nombre}</p>
                     <p>{usuario.apellido}</p> 
                     <p>{usuario.documento}</p>
                   </div> 
                </li>
                </>
              ))
            } 
          </ul>  
       </>    
  )  
}

export default List;
