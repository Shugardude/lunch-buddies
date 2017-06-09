import React, { Component } from 'react';
import { setNames, getNames, setSize, getSize, shuffleNames } from './localStorageHelper'
import './App.css';

import Sizes from './views/Sizes.js'
import BigButton from './views/BigButton.js'
import Group from './views/Group.js'
import Groups from './views/Groups.js'
import Submit from './views/Submit.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = { names: getNames(), input: '', size: getSize(), away: [] };
    this.handleInput = this.handleInput.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAway = this.handleAway.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleInput(e){
    this.setState({ input: e.target.value });
  }

  handleSizeChange(size){
    // save size selection in local storage
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
      const updatedNames = names.slice();
      updatedNames.splice(names.indexOf(input), 1);
      this.setState({ names: updatedNames, input: '', errorMessage: '' });
      setNames(updatedNames)
    } else {
      this.setState({ errorMessage: "Could not find name." });
    }
  }

  handleAway(name){
    const { names, away } = this.state;
    const newNames = names.filter( x => x !== name );
    this.setState({ away: [...away, name ], names: newNames })
  }

  handleBack(name){
    const { names, away } = this.state;
    const newAway = away.filter( x => x !== name );
    this.setState({ away: newAway, names: [...names, name] })
  }

  render() {
    const { size, input, errorMessage, names, away } = this.state;
    return (
      <div className="App">
        <div className="header">Today's Lunch Groups</div>
        <Sizes size={size} click={this.handleSizeChange} />
        <BigButton click={this.handleShuffle} text={'Shuffle'} />
        <Groups names={names} size={size} click={this.handleAway}/>
        <Submit value={input} errorMessage={errorMessage} change={this.handleInput} submit={this.handleSubmit} deleteName={this.handleDelete} />
        <Group group={away} number={0} click={this.handleBack} />
      </div>
    );
  }
}

export default App;



