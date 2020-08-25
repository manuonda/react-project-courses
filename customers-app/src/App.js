import React from 'react';
import { BrowserRouter  as Router , Route, Switch } from 'react-router-dom'
import './App.css';
import   HomeContainer   from './containers/HomeContainer'

class  App  extends React.Component {
  
  renderHome = () => <h1> Home </h1>
  
  renderCustomerContainer = () => <h1>Customer Container </h1>
  
  renderCustomerListContainer = () => <h1> Customers List Container </h1>
  
  renderCustomerNewContainer = () => <h1>Customer New Container </h1>
  
  
  render(){
  return (
    <Router>
    <div>
     <Route exact path="/" component={HomeContainer} />
     <Route exact path="/customers" component={this.renderCustomerListContainer}/>
     <Switch>
     <Route  path="/customers/new" component={ this.renderCustomerNewContainer}></Route>
     <Route  path="/customers/:dni" component={ this.renderCustomerContainer}></Route> 
     </Switch>
    </div>
    </Router>
  );
 } 
  
}

export default App;
