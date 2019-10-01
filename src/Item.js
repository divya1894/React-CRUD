import React, { Component } from 'react';
import './App.css';

class Item extends Component {

  render() {
    console.log(this);
    return (
      <li>
        {this.props.title}
        <button onClick={this.props.delete}>Delete</button>
        <button onClick={this.props.edit}>Edit</button>
      </li>
    );
  }
}

export default Item;