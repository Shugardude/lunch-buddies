import React, { Component } from 'react';
import { setNames, getNames } from './localStorageHelper'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { names: getNames(), input: '' };
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInput(e){
    this.setState({ input: e.target.value });
  }

  submit(){
    const { input, names } = this.state;
    if (!input) return;
    const updatedNames = [...names, input];
    this.setState({ names: updatedNames, input: '' });
    // update local storage every time a user is added
    setNames(updatedNames)
  }

  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <input value={input} onChange={this.handleInput}/>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default App;
