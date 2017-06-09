import React, { Component } from 'react';


class Group extends Component {
  render() {
    const { group=[], number, click } = this.props;
    return !group.length ? <div /> : (
      <div className="group">
        <div className="title">{number ? `Group ${number}` : "People Away"}</div>
        { group.map( (name,i) => <div key={`name${i}`} className='name' onClick={click.bind(null, name)} >{ name }</div> ) }
      </div>
    );
  }
}

export default Group;