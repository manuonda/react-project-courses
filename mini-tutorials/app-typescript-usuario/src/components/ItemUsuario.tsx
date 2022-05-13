import React from 'react'
import { Usuario } from '../types'

interface Iprops{
    usuario: Usuario
}

export const ItemUsuario = ({...usuario}: Iprops) => {
  return (
     <div>ItemUsuario</div>
  )
}
