import React, { useRef, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { animated, useSpring } from 'react-spring';
import { Button, Drawer, fade, IconButton, List, ListItem, ListItemText, Link } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import MenuIcon from '@material-ui/icons/Menu';
import { UpdateUserThemeContext, UserThemeContext } from '../../Theme';


const useStyles = makeStyles((theme) => createStyles({
    styledAppBar: {
        background: fade(theme.palette.background.default, 0.9),
        boxShadow: "none"
    },
    navIcon: {
        flexGrow: 1
    },
    desktopNav: {
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    },
    mobileNav: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    drawerStyle: {
        width: "200px",
        "& span": {
            textAlign: "center"
        }
    }
}));

const Navbar = ({
    window,
    scrollToAbout,
    scrollToExperience,
    scrollToProjects,
    scrollToContact,
    scrollToLanding
}) => {
    const classes = useStyles();
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    const [height, setHeight] = useState(0);
    const [isOnTop, setIsOnTop] = useState(() => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        return winScroll === 0;
    });
    const navRef = useRef(null);

    React.useEffect(() => {
        setHeight(navRef.current.clientHeight)
    }, []);

    const [animatedAppBar, setAnimatedAppBar, stopAnimatedAppBar] = useSpring(() => ({
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"
    }))
    setAnimatedAppBar({
        boxShadow: isOnTop ? "0 2px 4px 0 rgba(0,0,0,0)" : "0 2px 4px 0 rgba(0,0,0,.2)"
    })

    const checkIfOnTop = React.useCallback(() => {
        stopAnimatedAppBar();
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        setIsOnTop(winScroll === 0);
    }, [setIsOnTop, stopAnimatedAppBar]);

    React.useEffect(() => {
        document.addEventListener('scroll', checkIfOnTop);
    }, [checkIfOnTop]);

    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpenDrawer(!isOpenDrawer);
    }

    const setTheme = React.useContext(UpdateUserThemeContext);
    const theme = React.useContext(UserThemeContext);

    const toggleThemeSwitch = () => {
        if (theme === "darkTheme") {
            setTheme("lightTheme");
            return;
        }
        setTheme("darkTheme");
    }

    const handleScroll = (scrollFunction) => {
        scrollFunction();
        toggleDrawer();
    }


    return (
        <div style={{ height: `${height}px`, marginBottom: "5px" }}>
            <Slide ref={navRef} appear={false} direction="down" in={!trigger}>
                <AppBar className={classes.styledAppBar}>
                    <animated.div style={animatedAppBar}>
                        <Toolbar>
                            <Typography color="primary" className={classes.navIcon}>
                                <Link variant="h6" component="button" onClick={() => { scrollToLanding() }} underline="none">
                                    David
                                </Link>
                            </Typography>
                            <div className={classes.desktopNav}>
                                <Button onClick={() => { scrollToAbout() }}>About</Button>
                                <Button onClick={() => { scrollToExperience() }}>Experience</Button>
                                <Button onClick={() => { scrollToProjects() }}>Projects</Button>
                                <Button onClick={() => { scrollToContact() }}>Contact</Button>
                            </div>
                            <Button color="primary" variant="outlined" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Button>
                            <IconButton className={classes.margin} onClick={toggleThemeSwitch} color="primary">
                                {theme === "darkTheme" ?
                                    <NightsStayIcon fontSize="small" />
                                    :
                                    <Brightness7Icon fontSize="small" />
                                }
                            </IconButton>
                            <div className={classes.mobileNav}>
                                <IconButton className={classes.margin} onClick={() => { toggleDrawer() }}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor={'right'} open={isOpenDrawer} onClose={() => { toggleDrawer() }}>
                                    <List className={classes.drawerStyle}>
                                        <ListItem button onClick={() => { handleScroll(scrollToAbout) }}>
                                            <ListItemText primary="About" />
                                        </ListItem>
                                        <ListItem button onClick={() => { handleScroll(scrollToExperience) }}>
                                            <ListItemText primary="Experience" />
                                        </ListItem>
                                        <ListItem button onClick={() => { handleScroll(scrollToProjects) }}>
                                            <ListItemText primary="Projects" />
                                        </ListItem>
                                        <ListItem button onClick={() => { handleScroll(scrollToContact) }}>
                                            <ListItemText primary="Contact" />
                                        </ListItem>
                                    </List>
                                </Drawer>
                            </div>
                        </Toolbar>
                    </animated.div>
                </AppBar>
            </Slide>
        </div >
    );
}

export default Navbar;