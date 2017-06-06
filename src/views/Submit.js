import React, { Component } from 'react';

import BigButton from './BigButton.js'

class Submit extends Component {
  render() {
    const { value, errorMessage, change, submit, deleteName } = this.props;
    return (
      <div>
        <input className="nameinput" value={value} onChange={change} placeholder="Enter Name" maxLength="60" />
        { errorMessage && <div className="errorMessage">{`* ${errorMessage}`}</div> }
        <BigButton click={submit} text="Submit" />
        <BigButton click={deleteName} text="Delete" color="red" />
      </div>
    );
  }
}

export default Submit;

