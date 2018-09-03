import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { scroller } from 'react-scroll';

// defines IOS devices
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const SideDrawer = (props) => {

    /*
        Function uses scroller function from react-scroll
        to scroll to specified element. Element is specified
        by <Element> attribute in PlayerCard.js throughout code.
    */
    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 500,
            smooth: true,
            offset: -150
        });
    }

    /*
        Called whenever SideDrawer item is clicked.
        Calls scrollToElement to scroll to clicked item.
        Closes drawer when item is clicked.
    */
    const handleOnClick = (player) => {
        scrollToElement(player);
        props.onClose(false);
    }

    return (
        /*
            SwipeableDrawer from MaterialUI creates a side drawer
            that opens with the click of the menu icon or a right swipe.
        */
        <SwipeableDrawer 
            // disables swipe to open drawer on ios devices
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
            open={props.open}
            onClose={() => props.onClose(false)}
            onOpen={() => props.onClose(true)}>

            <List component="nav">
                <p style={{paddingLeft: 10}}><b> Go to Player: </b></p>
                {props.players.map(player => {
                    return(
                        <ListItem 
                            button 
                            onClick={() => handleOnClick(player)}
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