import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PlayerCard from './PlayerCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
});

class PlayerCards extends Component {
    
    state = {

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

                    <PlayerCard player="P1" />
                    <PlayerCard player="P2" />
                    <PlayerCard player="P3" />
                    <PlayerCard player="P4" />
                    <PlayerCard player="P5" />

                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(PlayerCards);