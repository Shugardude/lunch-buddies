import React, { Component } from 'react';

class Submit extends Component {
  render() {
    const { value, change, submit } = this.props;
    return (
      <div>
        <input value={value} onChange={change} />
        <button onClick={submit}>Submit</button>
      </div>
    );
  }
}

export default Submit;

