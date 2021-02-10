import {useContext} from 'react'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import { AuthProvider } from '../context/authContext'

const AppRouter = () => {


  return(
    <>
      <PublicRoutes></PublicRoutes>
      <AuthProvider>
        <PrivateRoutes></PrivateRoutes>
      </AuthProvider>
    
   </>
  )
}

export default AppRouter;