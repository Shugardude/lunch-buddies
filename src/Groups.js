import React, { Component } from 'react';

const spitGroups = (size, names) => {
  return [];
}

class Group extends Component {
  render() {
    const { group, number } = this.props;
    return (
      <div className="group">
        <div className="title">{`Group ${number}`}</div>
        { group.map( name => <div className='name'>{ name }</div> ) }
      </div>
    );
  }
}

class Groups extends Component {
  render() {
    const { size, names } = this.props
    const groups = spitGroups(size, names);
    for (let i = 0; i < names.length; i+=5){
      groups.push(names.slice(i, i+5));
    }
    return (
      <div className="groups">
        { groups.map( (group, i) => <Group group={group} number={i+1} /> ) }
      </div>
    );
  }
}

export default Groups;
