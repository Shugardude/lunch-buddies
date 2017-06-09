import React, { Component } from 'react';
import { splitGroups } from '../split.js'
import Group from './Group.js' 

class Groups extends Component {
  render() {
    const { size, names, click } = this.props
    const groups = splitGroups(size, names);
    return (
      <div className="groups">
        { groups.map( (group, i) => <Group key={`group${i}`} group={group} number={i+1} click={click}/> ) }
      </div>
    );
  }
}

export default Groups;
