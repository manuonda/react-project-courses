import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
const AppRouter = () => {

  return(
    <>
      <PublicRoutes></PublicRoutes>
      <PrivateRoutes></PrivateRoutes>
     
   </>
  )
}

export default AppRouter;