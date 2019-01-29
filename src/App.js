import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    number: 0
  };

  handleIncrement = (param, event) => {
    if (param === 'INC'){
      this.setState({number: this.state.number + 1})
    } else {
      const newCount = this.state.number - 1
      if (newCount >= 0){
        this.setState({number: newCount})
      }
    }
  }
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  render() {
    return (
      <div className="App">
        <h1>The current number is {this.state.number}</h1>
        <button onClick={(e) => this.handleIncrement('DEC', e)}>DECREASE</button>
        <button onClick={(e) => this.handleIncrement('INC', e)}>INCREASE</button>
      </div>
    );
  }
}

export default App;
