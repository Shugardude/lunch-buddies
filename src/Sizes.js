import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { size, button: { text, value }, click } = this.props;
    // if size equals button value, add selected class and disable click fn
    return (
      <div className={`sizebutton ${size === value ? 'selected' : ''}`}
        onClick={ size === value ? ()=>{} : click.bind(null, value) }>{ text }</div>
    );
  }
}

class Sizes extends Component {
  render() {
    const { size, click } = this.props;
    const buttons = [ { text: 'Small', value: 3 }, { text: 'Medium', value: 4 }, { text: 'Large', value: 5 } ];
    return (
      <div className="sizes">
        { buttons.map( button => <Button button={button} size={size} click={click} /> ) }
      </div>
    );
  }
}

export default Sizes;
