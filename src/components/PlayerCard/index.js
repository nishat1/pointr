import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddCircle from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import PlayerCard from './PlayerCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  button: {
      margin: theme.spacing.unit,
  },
  addcircleicon: {
    fontSize: "48px",
    textAlign: "center",
  },
});

class PlayerCards extends Component {
    
    state = {
        players: [
            "P1",
            "P2"
        ]
    }

    addPlayer = () => {
        this.setState({
            players: [...this.state.players, "P" + (this.state.players.length + 1)]
        });
    }

    render() {

        return(
            <div className={this.props.classes.root}>
                <Grid 
                    container 
                    spacing={24}
                    justify="center"
                    alignItems="center"
                >

                    {this.state.players.map(player => {
                        return(
                            <PlayerCard key={player} player={player} />
                        );
                    })}

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