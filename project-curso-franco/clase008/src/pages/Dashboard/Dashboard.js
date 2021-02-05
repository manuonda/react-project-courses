import {useContext} from 'react'
import {UsuarioContext} from '../../reducers/userContext'

const Dashboard = ({history}) => {
    console.log("dashboard")
    const {auth , logout } = useContext(UsuarioContext);
    console.log(auth)
    
    const handleLogout = () => {
        logout();
        history.push("/login");
    }
    return (
        <>
          <button onClick={handleLogout}>Salir</button>
        </>
    )
}

export default Dashboard;
