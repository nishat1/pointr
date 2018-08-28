import React, { Component } from 'react';
import './App.css';

import Header from './components/header_footer/Header';
import PlayerCards from './components/PlayerCard'

class App extends Component {

  state = {
    resetScore: false
  }

  // boolean to reset the score when reset button is clicked
  // from header component
  toggleReset = (value) => {
    this.setState({
      resetScore: value
    });
  }

  render() {
    return (
      <div className="App">
        <Header onReset={(value) => this.toggleReset(value)}/>

        {/*  updateReset changes reset boolean to false to prevent component to keep resetting score */}
        <PlayerCards 
          reset={this.state.resetScore} 
          updateReset={(value) => this.toggleReset(value)}/>
      </div>
    );
  }
}

export default App;
