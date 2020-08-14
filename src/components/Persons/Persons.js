import React, { Component } from 'react';

import Person from './Person/Person'

/*--- class-based comp ---*/

class Persons extends Component {
  render() {
    return (
      this.props.persons.map((person, index) => {
        return (
          <Person
            name={person.name} age={person.age} key={person.id}
            click={() => this.props.deleteName(index)}
            change={event => this.props.changeName(event, person.id)}
          />
        )
      })
    )
  }
}

export default Persons;
