import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NFL players</h1>
        </header>
        <main>
          <h2>Add</h2>
          <Form />
          <h2>List</h2>
        </main>
      </div>
    );
  }
}

export default App;
