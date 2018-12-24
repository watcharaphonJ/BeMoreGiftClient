import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import List from './list'
import Home from './Home'
import Review from './Review'

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/review" component={Review} />
      </div>
    )
  }
}

export default App;
