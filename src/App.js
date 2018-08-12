import React, { Component } from 'react';
import AddSkillWidget from './addSkillWidget/addSkillWidget'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSkillWidget />
      </div>
    );
  }
}

export default App;
