import React, { Component } from 'react';
import './App.css';

import Header from './components/header_footer/Header';
import PlayerCard from './components/PlayerCard/PlayerCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PlayerCard />
      </div>
    );
  }
}

export default App;
