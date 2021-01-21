
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        
      </Switch>

    </Router>
    </>
  );
}

export default App;
