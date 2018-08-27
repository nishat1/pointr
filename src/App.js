import React, { Component } from 'react';
import './App.css';

import Header from './components/header_footer/Header';
import PlayerCards from './components/PlayerCard'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <PlayerCards />
      </div>
    );
  }
}

export default App;
