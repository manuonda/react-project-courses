import React, { Children } from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import { User } from '../types'

interface Props  {
    isAllowed: boolean,
    reidrectTo?: string,
    children?: JSX.Element
}

export const ProtectRouted: React.FC<Props> = ({isAllowed, reidrectTo="/landing" , children}) => {
    if(!isAllowed) {
       return <Navigate to={reidrectTo} />
    }
    
    return children ?  children : <Outlet />
}
