import React, { Component } from 'react';
import { setNames, getNames, setSize, getSize, shuffleNames } from './localStorageHelper'
import './App.css';

import Sizes from './views/Sizes.js'
import BigButton from './views/BigButton.js'
import Groups from './views/Groups.js'
import Submit from './views/Submit.js'

class App extends Component {

  constructor(props){
    super(props);
    // default group size is large
    this.state = { names: getNames(), input: '', size: getSize() };
    this.handleInput = this.handleInput.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInput(e){
    this.setState({ input: e.target.value });
  }

  handleSizeChange(size){
    setSize(size);
    this.setState({ size });
  }

  handleShuffle(){
    this.setState({ names: shuffleNames() });
  }

  handleSubmit(){
    const { input, names } = this.state;
    if (!input) return;
    else if (names.indexOf(input) > -1){
      this.setState({ errorMessage: "This name already exists, please add a unique identifier" });
    } else {
      const updatedNames = [...names, input];
      this.setState({ names: updatedNames, input: '', errorMessage: '' });
      // update local storage every time a user is added
      setNames(updatedNames)
    }
  }

  handleDelete(){
    const { input, names } = this.state;
    if (!input) return;
    else if (names.indexOf(input) > -1){
      const updatedNames = names.splice(1, names.indexOf(input) - 1);
      this.setState({ names: updatedNames, input: '', errorMessage: '' });
      // update local storage every time a user is added
      setNames(updatedNames)
    } else {
      this.setState({ errorMessage: "Could not find name." });
    }
  }

  render() {
    const { size, input, errorMessage, names } = this.state;
    return (
      <div className="App">
        <div className="header">Today's Lunch Groups</div>
        <Sizes size={size} click={this.handleSizeChange} />
        <BigButton click={this.handleShuffle} text={'Shuffle'} />
        <Groups names={names} size={size} />
        <Submit value={input} errorMessage={errorMessage} change={this.handleInput} submit={this.handleSubmit} deleteName={this.handleDelete} />
      </div>
    );
  }
}

export default App;
