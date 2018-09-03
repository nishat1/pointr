import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import { Element } from 'react-scroll';

/*
    Styles used from Grid demo from MaterialUI
*/
const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    touchAction: "manipulation",
  },
  avatar: {
    flexGrow: 1,
    padding: 20,
    margin: 'auto',
    touchAction: "manipulation",
  },
});

/**
 * PlayerCard creates a Paper component to hold details for one player.
 * args: none
 * returns: one PlayerCard with its own state to update its own score
 */
class PlayerCard extends Component {

    // score for player
    state = {
        score: 0,
        mouseDown: false
    }

    /**
     * Increases player score by 1
     * args: none
     * returns: none
     * modifies: state
     */
    updateScoreUp = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    /**
     * Decreases player score by 1
     * args: none
     * returns: none
     * modifies: state
     */
    updateScoreDown = () => {
        this.setState({
            score: this.state.score - 1
        });
    }

    resetScore = () => {
        this.setState({
            score: 0
        });
    }

    componentDidUpdate() {
        /*
            Check if reset boolean from parent is true or false
            if true: set all scores to 0 but do not delete any cards
            if false: do nothing 
        */
        if(this.props.reset) {
            this.resetScore();
            this.props.updateReset(false);
        }
    }

    render() {

        // styling for +/- buttons in each card
        const buttonSettings = {
            variant: "outlined",
            size: "small",
            style: {
                margin: "5px"
            }
        }

        return (
            /*
                Grid item takes up half width of grid.
                Item contains a Paper card with:
                    - an Avatar showing the player number
                    - score of the player
                    - 2 buttons for increasing/decreasing score
            */
            <Grid item xs={6}>
                {/* Label each card with an element tag from react-scroll */}
                <Element name={this.props.player}>
                    <Paper className={this.props.classes.paper}>
                        <Avatar className={this.props.classes.avatar}> {this.props.player} </Avatar>
                        <h1> {this.state.score} </h1>
                        <div>
                            <Button 
                                onClick={() => this.updateScoreUp()}
                                {...buttonSettings}>+</Button>
                        </div>
                        <div>
                            <Button 
                                onClick={() => this.updateScoreDown()}
                                {...buttonSettings}>-</Button>
                        </div>
                    </Paper>
                </Element>
            </Grid>
        );
    }
}

export default withStyles(styles)(PlayerCard);