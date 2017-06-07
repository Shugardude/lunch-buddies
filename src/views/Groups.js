import React, { Component } from 'react';
import { splitGroups } from '../split.js'


class Group extends Component {
  render() {
    const { group, number } = this.props;
    return (
      <div className="group">
        <div className="title">{`Group ${number}`}</div>
        { group.map( (name,i) => <div key={`name${i}`} className='name'>{ name }</div> ) }
      </div>
    );
  }
}

class Groups extends Component {
  render() {
    const { size, names } = this.props
    const groups = splitGroups(size, names);
    return (
      <div className="groups">
        { groups.map( (group, i) => <Group key={`group${i}`} group={group} number={i+1} /> ) }
      </div>
    );
  }
}

export default Groups;
