import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { scroller } from 'react-scroll';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            smooth: true,
            offset: -150
        });
    }

    return (
        <SwipeableDrawer 
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
            // anchor="left"
            open={props.open}
            onClose={() => props.onClose(false)}
            onOpen={() => props.onClose(true)}>

            <List component="nav">
                <p style={{paddingLeft: 10}}><b> PLAYERS </b></p>
                {props.players.map(player => {
                    return(
                        <ListItem 
                            button 
                            onClick={() => scrollToElement(player)}
                            key={player}
                            style={{width: 150}}>

                            <div>
                                {player}
                            </div>

                        </ListItem>
                    );
                })}
            </List>

        </SwipeableDrawer>
    );
};

export default SideDrawer;