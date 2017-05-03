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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Exchange Rates</h2>
        </div>
        <Table rates={this.state.rates} />
      </div>
    );
  }
}

export default App;
