import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddCircle from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import PlayerCard from './PlayerCard';

/*
    Styling for Grid based on Grid demo from MaterialUI.
    touchAction used to disable double tap to zoom on IOS.
    addcircleicon used to style add player button.
*/
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
    touchAction: "manipulation",
    marginTop: 65,
  },
  button: {
      margin: theme.spacing.unit,
      touchAction: "manipulation",
  },
  addcircleicon: {
    fontSize: "48px",
    textAlign: "center",
    touchAction: "manipulation",
  },
});

class PlayerCards extends Component {
    
    /* 
        State to keep track of every player.
        Starts off with default two players.
    */
    state = {
        players: [
            "P1",
            "P2"
        ]
    }

    /**
     * addPlayer function adds a player to state everytime it's called
     * args: none
     * returns: none
     * modifies: state
     */
    addPlayer = () => {
        this.setState({
            players: [...this.state.players, "P" + (this.state.players.length + 1)]
        });
    }

    render() {

        return(
            <div className={this.props.classes.root}>

                {/* Grid object to hold every card */}
                <Grid 
                    container 
                    spacing={24}
                    justify="center"
                    alignItems="center"
                >

                    {/* Dynamically outputs a card for each player based on number of players in state */}
                    {this.state.players.map(player => {
                        return(
                            <PlayerCard key={player} player={player} />
                        );
                    })}

                    {/* Add Player button -- takes up same grid space as a player card */}
                    <Grid item xs={6} alignItems="center" justify="center" container>
                        <IconButton 
                            className={this.props.classes.button} 
                            aria-label="Add Player" 
                            onClick={this.addPlayer}>
                            <AddCircle className={this.props.classes.addcircleicon} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(PlayerCards);