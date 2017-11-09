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
      data: {
        value: 1,
        other: 1
      },
      dataLain : {
        dataAnu: 11
      },
      style: {
        header: '',
        margin: ''
      }
    }
    this.hideBar = this.hideBar.bind(this)
  }

  onClickHandle (event) {
    const state = this.state
    const { data } = this.state

    console.log(event.target.value)

    // try to add new value 
    data.value = Number(event.target.value) + 1
    this.setState({...this.state, data})
  }
  
  displayHomePage () {
    const data = this.state.data
    return (
      <div className="App" style={{height: '1000px'}}>
        <header className="App-header" style={{position: this.state.style.header}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to reak hoek cuh</h1>
        </header>
        <div style={{paddingTop: this.state.style.margin}}>
          <p className="App-intro" style={{}}>
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button value={data.value} onClick={(event) => this.onClickHandle(event)}>Click me</button>
          <p>{data.value}</p>
          <p> other {data.other} </p>
        </div>
      </div>
    )
  }

  hideBar () {
    const {style} = this.state

    console.log(window.scrollY)
    if (window.scrollY > 200) {
      style.header = 'fixed'
      style.margin = '450px'
    } else {
      style.header = ''
      style.margin = ''
    }

    this.setState({...this.state, style})
  }

  componentDidMount () {
    window.addEventListener('scroll', this.hideBar);
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
