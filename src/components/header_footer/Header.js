import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/* Styles for Header pulled from MaterialUI header demo */
/* flexGrow: defines ability of flex item to grow if necessary */
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  console.log(props.positionFixed);
  return (
    <div className={classes.root}>

      {/* Creates header object: position-fixed keeps header visible during scroll */}
      <AppBar 
        position={props.positionFixed ? "fixed" : "sticky"}
        style={{backgroundColor: "#2f2f2f"}}>

        <Toolbar>

          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}

          {/* 
              Adds title in header. 
              Reloads page if title is clicked
          */}
          <Typography 
            variant="title" 
            color="inherit" 
            className={classes.flex} 
            onClick={() => window.location.reload()}
          >
            Pointr
          </Typography>

        </Toolbar>

      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);