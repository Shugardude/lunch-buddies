import React, { Component } from 'react';

class BigButton extends Component {
  render() {
    const { text, color, click } = this.props;
    return (
      <div className="bigButtonContainer">
        <div className={`button big ${color ? color : ''}`} onClick={click} >{text}</div>
      </div>
    );
  }
}

export default BigButton;

