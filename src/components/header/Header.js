import React from 'react';
import { Divider, Toolbar, IconButton, Typography, Badge, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    tagline: {
        fontSize: 20,
        textTransform: 'uppercase',
        justifyContent: 'center',
        fontFamily: 'Raleway',
    },
}));

const Header = () => {

    const classes = useStyles();

    return (
        <>
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>Brittany's Blog</Typography>
                <IconButton>
                    <Badge badgeContent={4} color='secondary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color='inherit'>
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <Toolbar className={classes.tagline}>Put some title here</Toolbar>
        </>
    )
}

export default Header
