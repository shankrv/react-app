/* imports for class-based comp */
import React, { Component } from "react";

/* imports for funct-based comp */
// import React, { useState } from "react"; // using Hooks

/* assets */
import logo from "../assets/logo.svg";

import "./App.css";

/* app-components */
import Cabin from "../components/Cabin/Cabin";
import Persons from "../components/Persons/Persons";


/*--- Class based Component ---*/

class App extends Component {

  /* global-state */
  state = {
    persons: [
      { id: 'P0', name: 'Ravi', age: 26 },
      { id: 'P1', name: 'John', age: 30 },
      { id: 'P2', name: 'Jane', age: 28 },
    ],
    showItems: false
  }

  /* event handlers */

  // Two-Way Binding
  changeName = (event, id) => {
    // find the index
    const personIndex = this.state.persons.findIndex(per => per.id === id);

    // create a new obj to mutate
    const person = { ...this.state.persons[personIndex] };

    // mutate the obj
    person.name = event.target.value;

    // create a cpy of persons
    const persons = [...this.state.persons]; // arr

    // mutate the person arr
    persons[personIndex] = person;

    // update the state
    this.setState({ persons: persons });
  }

  deleteName = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  toggleState = () => {
    const showState = this.state.showItems;
    this.setState({ showItems: !showState });
  }

  render() {
    let persons = null;

    if (this.state.showItems) {
      persons = (
        <Persons
          persons={this.state.persons}
          showItems={this.state.showItems}
          changeName={this.changeName}
          deleteName={this.deleteName}
        />
      );
    }

    return (
      <div className="App">
        {/* react-header */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* app-components */}
        <Cabin
          title={this.props.appTitle}
          persons={this.state.persons}
          showItems={this.state.showItems}
          toggleState={this.toggleState}
        />
        {persons}
      </div>
    )
  }
}

export default App;

/* --- Snippets from class-based Comp. --- */

/*
switchName = (name) => {
	// Don't mutate the state directly. Use setState()
	// this.state.persons[0].name = 'Ryan';
	this.setState({
		persons: [
			{ name: 'Ryan', age: 23 },
			{ name: name, age: 38 },
			{ name: 'Andy', age: 22 },
		]
	});
}

changeName = (event) => { // event -> obj
	this.setState({
		persons: [
			{ name: 'Ryan', age: 23 },
			{ name: event.target.value, age: 38 }, // target elem.
			{ name: 'Andy', age: 22 },
		]
	});
}


// inline-styling
const style = { // style -> obj
	backgroundColor: 'white', // camelCase for '-'
	font: 'inherit',
	border: '1px solid deepskyblue',
	padding: '8px'
}

const jsx =
	(<div>
		<Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Hobbies : Gaming </Person>
		<Person click={this.switchName.bind(this, 'Mike -> bind()')} name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.changeName} />
		<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
		<button style={style} onClick={() => this.switchName('Mike -> arrow-fx')}> Switch Name </button>
	</div>);
*/


/* --- Snippets from fx-based Comp --- */
/*
const App = () => {

	// react - hook : useState() w. callback-fx
	const [personState, setPerson] = useState({ // arr. destr
		persons: [ // init-state
			{ name: 'Ravi', age: 26 },
			{ name: 'John', age: 30 },
			{ name: 'Jane', age: 28 },
		]
	});

	const switchName = () => { // eventHandler method
		setPerson({ // fx-callback to update new state
			persons: [
				{ name: 'Ryan', age: 23 },
				{ name: 'Mike', age: 38 },
				{ name: 'Andy', age: 22 },
			]
			// mutates init-state by replace and re-renders the UI
		});
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<h3>Hello World.</h3>
			<Person name={personState.persons[0].name} age={personState.persons[0].age}> Hobbies : Gaming </Person>
			<Person name={personState.persons[1].name} age={personState.persons[1].age} />
			<Person name={personState.persons[2].name} age={personState.persons[2].age} />
			<button onClick={switchName}> Switch Name </button>
		</div>
	);

}
*/
