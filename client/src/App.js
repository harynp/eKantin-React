import React, { Component } from 'react';
import './App.css';
import Table from '../src/components/table'
import DropDown from '../src/components/dropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropDown/>
        <Table/>
      </div>
    );
  }
}

export default App;
