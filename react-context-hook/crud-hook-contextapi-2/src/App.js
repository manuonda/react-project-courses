import logo from './logo.svg';
import './App.css';
import { Switch , Route, BrowserRouter as Router } from 'react-router-dom';
import ListArticle   from './components/ListArticle';
import CreateArticle from './components/CreateArticle'
import EditArticle   from './components/EditArticle'
import DetailArticle from './components/DetailArticle'
import NavBar        from './components/NavBar';
import  GlobalContextProvider  from './context/GlobalContext';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <GlobalContextProvider>
         <Router>
         <Switch>
           <Route exact path="/" component={ListArticle}></Route>
           <Route path="/create" component={CreateArticle}></Route>
           <Route path="/edit/:id" component={EditArticle}></Route>
           <Route path="/detail/:id" component={DetailArticle}></Route>
           </Switch>
         </Router>
         </GlobalContextProvider>
        
    </div>
  );
}

export default App;
