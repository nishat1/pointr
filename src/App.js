import React, { Component } from 'react';
import './App.css';

import Header from './components/header_footer/Header';
import PlayerCards from './components/PlayerCard'

import ReactGA from 'react-ga';

class App extends Component {

  state = {
    resetScore: false,
    players: [
      "P1",
      "P2"
    ]
  }

  // boolean to reset the score when reset button is clicked
  // from header component
  toggleReset = (value) => {
    this.setState({
      resetScore: value
    });
  }

  updatePlayers = (playerList) => {
    this.setState({
      players: playerList
    });
  }

  componentDidMount() {
    ReactGA.initialize('UA-124477863-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header 
          onReset={(value) => this.toggleReset(value)}
          players={this.state.players}/>

        {/*  updateReset changes reset boolean to false to prevent component to keep resetting score */}
        <PlayerCards 
          reset={this.state.resetScore} 
          updateReset={(value) => this.toggleReset(value)}
          players={(playerList) => this.updatePlayers(playerList)}/>
      </div>
    );
  }
}

export default App;
