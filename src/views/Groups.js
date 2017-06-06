import React, { Component } from 'react';

const splitGroups = (size, names) => {
  if (!names || !names.length) return [];
  const groups = [];
  const len = names.length;
  if (len <= size) groups.push(names);
  else {
    const remainder = (len % size);
    const ends = [];
    let i = 0;
    // ends keeps track of how big the groups will be, figure out the last one or two groups later
    while (i < (len - remainder)/size){
      ends.push(size);
      i++;
    }

    // if length of names is not divisible by groups size, last one or two groups will
    // be sized differently, but must remain within 3 - 5 people
    if (remainder >= 3 && remainder <= 5) ends.push(remainder);
    else if (remainder){
      ends.pop()
      if (remainder + size >= 3 && remainder + size <= 5) ends.push(remainder + size);
      else ends.push(remainder + size - 3, 3); 
    }
    // if there are groups with 5 and groups with 3, even them out to 4
    while(ends.indexOf(5) > -1 && ends.indexOf(3) > -1){
      ends[ends.indexOf(5)] = ends[ends.indexOf(3)] = 4;
    }
    ends.sort().reverse()
    
    // slice names to create each group
    let ind = 0;
    ends.forEach( end => {
      groups.push(names.slice(ind, ind + end));
      ind+=end;
    })

  }
  return groups;
};

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
