import React, { Component } from 'react';

class ShuffleButton extends Component {
  render() {
    const { shuffle } = this.props;
    return (
      <div className="shuffleContainer">
        <div className='button shuffle' onClick={shuffle} >Shuffle</div>
      </div>
    );
  }
}

export default ShuffleButton;

