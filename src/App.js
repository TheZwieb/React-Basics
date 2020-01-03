import React, { Component } from 'react';
import Coders from './Coders';
import AddCoder from './AddCoder';

class App extends Component {
  state = {
    Coders : [
      {name: 'Austin', age: 25, skillLevel: 'n00b', id:1 },
      {name: 'Sydwell', age: 28, skillLevel: 'Senior', id:2 },
      {name: 'J. Carmac', age: 49, skillLevel: 'Grand Master', id:3 },
    ]
  }
  addCoder=(Coder) => {
    Coder.id = Math.random();
    let coders = [...this.state.Coders, Coder];
    this.setState({
      Coders: coders
    })
  }
    render() {
      return (
        <div className="App">
          <h1>React Basics</h1>
          <p>CODERS:</p>
          <Coders Coders={this.state.Coders}/>
          <AddCoder AddCoder={this.addCoder}/>
        </div>
      );
    }
}

export default App;
