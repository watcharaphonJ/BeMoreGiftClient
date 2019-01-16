import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import List from './list'
import Home from './Home'
import Review from './Review'
import Contact from './contact'
import Blog from './blog'
import Promotion from './promotion'
import Partner from './partner'
import CK from './ck'
import KK from './kk'
import MH from './mh'

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/review/:id" component={Review} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/ck" component={CK} />
        <Route exact path="/blog/kk" component={KK} />
        <Route exact path="/blog/mh" component={MH} />
        <Route exact path="/promotion" component={Promotion} />

        <Route exact path="/partner" component={Partner} />
      </div>
    )
  }
}

export default App;
