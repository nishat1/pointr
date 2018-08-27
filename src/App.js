import React, { Component } from 'react';
import './App.css';

import Header from './components/header_footer/Header';
import PlayerCards from './components/PlayerCard'

class App extends Component {

  state = {
    headerPositionFixed: false
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
      if(window.scrollY > 0) {
          this.setState({
              headerPositionFixed: true
          });
      } else {
          this.setState({
              headerPositionFixed: false
          });
      }
  }

  render() {
    return (
      <div className="App">
        <Header positionFixed={this.state.headerPositionFixed}/>
        <PlayerCards />
      </div>
    );
  }
}

export default App;
