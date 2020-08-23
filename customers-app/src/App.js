import React from 'react';
import { Link ,BrowserRouter  as Router , Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


class  App  extends React.Component {
  
  renderHome = () => <h1> Home </h1>
  
  renderCustomerContainer = () => <h1>Customer Container </h1>
  
  renderCustomerListContainer = () => <h1> Customers List Container </h1>
  
  renderCustomerNewContainer = () => <h1>Customer New Container </h1>
  
  
  render(){
  return (
    <Router>
    <div className="App">
     <Route exact path="/" component={ this.renderHome}></Route>
     <Route exact path="/customers" component={ this.renderCustomerListContainer}></Route>
     <Route exact path="/customers/new" component={ this.renderCustomerNewContainer}></Route>
     <Route exact path="/customers/:dni" component={ this.renderCustomerContainer}></Route> 
    </div>
    </Router>
  );
 } 
  
}

export default App;
