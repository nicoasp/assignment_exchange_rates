import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Table from './Table'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isFetching: true,
      rates: {} //current rates
    }
  }

  componentDidMount() {
    fetch('http://api.fixer.io/latest')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          rates: json,
          isFetching: false,
        })
      })
      .then( () => {
        console.log(this.state);
      })
  }

  onChange = (e) => {
    this.setState({
      isFetching: true
    })
    const newBase = e.target.value;
    console.log(newBase);
    
    fetch(`http://api.fixer.io/latest?base=${newBase}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          rates: json,
          isFetching: false,
        })
      })
      .then( () => {
        console.log(this.state);
      })    

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Exchange Rates</h2>
        </div>
        <div className="container">
          <Table onChange={this.onChange} rates={this.state.rates} />
        </div>
      </div>
    );
  }
}

export default App;
