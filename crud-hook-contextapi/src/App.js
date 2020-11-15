import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import  GlobalStateProvider   from './context/GlobalState'

import  'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div sytle={{ maxWidth:"30rem", margin:"4rem auto"}}>
      <GlobalStateProvider>
      <Router>
       <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route  path="/add" component={AddUser}></Route>
         <Route exat path="/edit/:id" component={EditUser}></Route>
       </Switch>
     </Router>
    
      </GlobalStateProvider>
     </div>
  );
}

export default App;
