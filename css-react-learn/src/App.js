import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import styledcomponents from 'styled-components'

import store from './redux/store/index'
import logo from './logo.svg';

import './App.css';
import './assets/css/DottedBox.css'
import modulesCSS from './assets/css/DashedBox.css'

import StyledComponents from './components/styledcomponents'

class App extends Component {
  constructor () {
    super()
    this.state = {
      inlineStyle: {
        divStyle: {
          margin: '40px',
          border: '5px solid pink'
        },
        pStyle: {
          fontSize: '15px',
          textAlign: 'center'
        }
      },
    }
  }
  
  displayHomePage () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <h1 className="App-title">Welcome to reak hoek cuh</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to={{ pathname: '/cssstylesheet/' }}>
            Style Sheet
          </Link>
      </div>
    )
  }

  cssStyleSheet = () => {
    return (
      <div className="DottedBox">
        <p className="DottedBox_content"> Get Started this is using css stylesheet </p>
      </div>
    )
  }

  // start from here css using inline styling 
  inlineStyle = () => {
    return (
      <div style={this.state.inlineStyle.divStyle}>
        <p style={this.state.inlineStyle.pStyle}>Get started this is using inline using stylesheet</p>
      </div>
    )
  }
  // end from here css using inline styling 

  // Start from here css usign modules styling 
  modulesStyle = () => {
    return (
      <div className={modulesCSS.container}>
        <p className={modulesCSS.content}>Get started with CSS Modules style</p>
      </div>
    )
  }

  styled = () => {
    return (
      <StyledComponents/>
    )
  }

  render () {

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" render={() => this.displayHomePage()}/>
            <Route exact path="/cssstylesheet" render={() => this.cssStyleSheet()}/>
            <Route exact path="/inlinesheet" render={() => this.inlineStyle()}/>
            <Route exact path="/modulessheet" render={() => this.modulesStyle()}/>
            <Route exact path="/styledcomponents" render={() => this.styled()}/>
          </div>
        </Router> 
      </Provider>
    )
  }
}

export default App;
