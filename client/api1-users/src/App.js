import React, { Component } from 'react';
import UserList from './components/UserList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Jumbotron} from 'reactstrap';


import './App.css';

function App() {
  return (
      <Router>
    <div className="App">
    <Jumbotron> <h1>SUPERNATURAL ASSEMBLE</h1> </Jumbotron>
     <Route exact path ='/app' component = {UserList} />
    </div>
    </Router>
  );
}

export default App;
