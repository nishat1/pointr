import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    flexGrow: 1,
    padding: 20,
    margin: 'auto',
  },
});

class PlayerCard extends Component {

    state = {
        score: 0
    }

    updateScoreUp = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    updateScoreDown = () => {
        this.setState({
            score: this.state.score - 1
        });
    }

    render() {

        const buttonSettings = {
            variant: "outlined",
            size: "small",
            style: {
                margin: "5px"
            }
        }

        return (
            <Grid item xs={6}>
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
            </Grid>
        );
    }
}

export default withStyles(styles)(PlayerCard);