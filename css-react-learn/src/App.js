import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store/index'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  
  displayHomePage () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to reak hoek cuh</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" render={() => this.displayHomePage()}/>
          </div>
        </Router> 
      </Provider>
    )
  }
}

export default App;
