import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <hr />
        <ul>
          <Person firstName="Baptiste" lastName="Vannesson" />
          <Person firstName="John" lastName="Doe" />
          <Person firstName="Foo" lastName="Bar" />
        </ul>
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
        <div>{this.state.value}</div>
      </div>
    );
  }
}

class Person extends Component {
  render() {
    return (
      <li className="person">{this.props.firstName} {this.props.lastName}</li>
    );
  }
}

export default App;
