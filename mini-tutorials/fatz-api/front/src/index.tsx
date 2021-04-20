import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Home from './Home';
import VideoForm from './components/Videos/VideoForm'



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/new-video" component={VideoForm}></Route>
    </Switch>

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
