import React, { Component } from 'react';
import { setNames, getNames } from './localStorageHelper'
import './App.css';

import Sizes from './Sizes.js'
import Groups from './Groups.js'

class App extends Component {

  constructor(props){
    super(props);
    // default group size is large
    this.state = { names: getNames(), input: '', size: 5 };
    this.handleInput = this.handleInput.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInput(e){
    this.setState({ input: e.target.value });
  }

  handleSizeChange(size){
    this.setState({ size });
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
    const { size, input, names } = this.state;
    return (
      <div className="App">
        <div className="header">Today's Lunch Groups</div>
        <Sizes size={size} click={this.handleSizeChange} />
        <Groups names={names} />
        <div>
          <input value={input} onChange={this.handleInput}/>
          <button onClick={this.submit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
