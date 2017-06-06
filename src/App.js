import React, { Component } from 'react';
import { setNames, getNames, shuffleNames } from './localStorageHelper'
import './App.css';

import Sizes from './Sizes.js'
import ShuffleButton from './ShuffleButton.js'
import Groups from './Groups.js'
import Submit from './Submit.js'

class App extends Component {

  constructor(props){
    super(props);
    // default group size is large
    this.state = { names: getNames(), input: '', size: 5 };
    this.handleInput = this.handleInput.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    this.setState({ input: e.target.value });
  }

  handleSizeChange(size){
    this.setState({ size });
  }

  handleShuffle(){
    this.setState({ names: shuffleNames() });
  }

  handleSubmit(){
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
        <ShuffleButton shuffle={this.handleShuffle} />
        <Groups names={names} size={size} />
        <Submit value={input} change={this.handleInput} submit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
