import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
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
        scoreA: 0,
        scoreB: 0,
        scoreC: 0,
        scoreD: 0,
        scoreE: 0,
    }

    updateScore = (up, player) => {
        if(up) {
            switch(player) {

                case 'A':
                    this.setState({
                        scoreA: this.state.scoreA + 1
                    });
                    break;

                case 'B':
                    this.setState({
                        scoreB: this.state.scoreB + 1
                    });
                    break;
                
                case 'C':
                    this.setState({
                        scoreC: this.state.scoreC + 1
                    });
                    break;

                case 'D':
                    this.setState({
                        scoreD: this.state.scoreD + 1
                    });
                    break;

                case 'E':
                    this.setState({
                        scoreE: this.state.scoreE + 1
                    });
                    break;
                
                default:
                    break;

            }
        } else {
            switch(player) {

                case 'A':
                    this.setState({
                        scoreA: this.state.scoreA - 1
                    });
                    break;

                case 'B':
                    this.setState({
                        scoreB: this.state.scoreB - 1
                    });
                    break;

                case 'C':
                    this.setState({
                        scoreC: this.state.scoreC - 1
                    });
                    break;

                case 'D':
                    this.setState({
                        scoreD: this.state.scoreD - 1
                    });
                    break;

                case 'E':
                    this.setState({
                        scoreE: this.state.scoreE - 1
                    });
                    break;

                default:
                    break;
                    
            }
        }
    }

    render() {

        const buttonSettings = {
            variant: "outlined",
            size: "small",
            raised: true,
            style: {
                margin: "5px"
            }
        }

        return(
            <div className={this.props.classes.root}>
                <Grid 
                    container 
                    spacing={24}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <Paper className={this.props.classes.paper}>
                            <Avatar className={this.props.classes.avatar}> P1 </Avatar>
                            <h1> {this.state.scoreA} </h1>
                            <Button 
                                onClick={() => this.updateScore(false, 'A')}
                                {...buttonSettings}>-</Button>
                            <Button 
                                onClick={() => this.updateScore(true, 'A')}
                                {...buttonSettings}>+</Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={this.props.classes.paper}>
                            <Avatar className={this.props.classes.avatar}> P2 </Avatar>
                            <h1> {this.state.scoreB} </h1>
                            <Button 
                                onClick={() => this.updateScore(false, 'B')}
                                {...buttonSettings}>-</Button>
                            <Button 
                                onClick={() => this.updateScore(true, 'B')}
                                {...buttonSettings}>+</Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={this.props.classes.paper}>
                            <Avatar className={this.props.classes.avatar}> P3 </Avatar>
                            <h1> {this.state.scoreC} </h1>
                            <Button 
                                {...buttonSettings}
                                onClick={() => this.updateScore(false, 'C')}>-</Button>
                            <Button 
                                {...buttonSettings}
                                onClick={() => this.updateScore(true, 'C')}>+</Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={this.props.classes.paper}>
                            <Avatar className={this.props.classes.avatar}> P4 </Avatar>
                            <h1> {this.state.scoreD} </h1>
                            <Button 
                                {...buttonSettings}
                                onClick={() => this.updateScore(false, 'D')}>-</Button>
                            <Button 
                                {...buttonSettings}
                                onClick={() => this.updateScore(true, 'D')}>+</Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={this.props.classes.paper}>
                            <Avatar className={this.props.classes.avatar}> P5 </Avatar>
                            <h1> {this.state.scoreE} </h1>
                            <Button 
                                {...buttonSettings}
                                onClick={() => this.updateScore(false, 'E')}>-</Button>
                            <Button 
                                {...buttonSettings}
                                onClick={() => this.updateScore(true, 'E')}>+</Button>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(PlayerCard);