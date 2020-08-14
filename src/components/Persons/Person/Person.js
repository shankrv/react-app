import React, { Component } from "react";

import './Person.css'

/*--- class-based comp ---*/

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age}.</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.change} value={this.props.name}></input>
      </div>
    )
  }
}

export default Person;
