import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";


const useStyles = makeStyles((theme) => createStyles({
    styledAppBar: {
        background: theme.palette.background.default,
    }
}));

const Navbar = ({ window }) => {
    const classes = useStyles();

    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar className={classes.styledAppBar}>
                <Toolbar>
                    <Typography variant="h6" color="primary">David</Typography>
                </Toolbar>
            </AppBar>
        </Slide>
    );
}

export default Navbar;