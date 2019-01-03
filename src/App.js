import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import List from './list'
import Home from './Home'
import Review from './Review'
import Contact from './contact'
import Blog from './blog'

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
      </div>
    )
  }
}

export default App;
