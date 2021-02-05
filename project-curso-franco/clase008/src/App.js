import logo from './logo.svg';
import './App.css';
import PublicRoutes  from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes'; 
import { UsuarioProvider } from './reducers/userContext';

function App() {
  return (
   <>
   <UsuarioProvider>
      <PublicRoutes/>
      <PrivateRoutes/>
   </UsuarioProvider>
   </>
  );
}

export default App;
