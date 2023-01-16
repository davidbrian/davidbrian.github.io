import React, { useRef, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { animated, useSpring } from 'react-spring';
import { Button, Drawer, fade, IconButton, List, ListItem, ListItemText, Link, styled } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { UpdateUserThemeContext, UserThemeContext } from '../../Theme';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    animationDelay: '500ms',
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.primary.dark,
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

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
        setHeight(navRef.current.clientHeight);
    }, []);

    const [animatedAppBar, setAnimatedAppBar, stopAnimatedAppBar] = useSpring(() => ({
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"
    }));
    setAnimatedAppBar({
        boxShadow: isOnTop ? "0 2px 4px 0 rgba(0,0,0,0)" : "0 2px 4px 0 rgba(0,0,0,.2)"
    });

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
    };

    const setTheme = React.useContext(UpdateUserThemeContext);
    const theme = React.useContext(UserThemeContext);

    const toggleThemeSwitch = () => {
        if (theme === "darkTheme") {
            setTheme("lightTheme");
            return;
        }
        setTheme("darkTheme");
    };

    const handleScroll = (scrollFunction) => {
        scrollFunction();
        toggleDrawer();
    };

    const navigations = {
        About: scrollToAbout,
        Experience: scrollToProjects,
        Projects: scrollToProjects,
        Contact: scrollToContact,
    };

    return (
        <div style={{ height: `${height}px`, marginBottom: "5px" }}>
            <Slide ref={navRef} appear={false} direction="down" in={!trigger}>
                <AppBar className={classes.styledAppBar}>
                    <animated.div style={animatedAppBar}>
                        <Toolbar>
                            <Typography color="primary" className={`${classes.navIcon} fade-in`}>
                                <Link variant="h6" component="button" onClick={() => { scrollToLanding(); }} underline="none">
                                    David
                                </Link>
                            </Typography>
                            <div className={classes.desktopNav}>
                                {
                                    Object.entries(navigations).map((t, k) => {
                                        console.log(t);
                                        return (
                                            <Button
                                                key={t[0]}
                                                className="fade-from-top"
                                                style={{ animationDelay: `${k}00ms` }} onClick={() => { t[1](); }}>
                                                {t[0]}
                                            </Button>
                                        );
                                    })
                                }
                            </div>
                            <MaterialUISwitch
                                checked={theme === 'darkTheme'}
                                onClick={toggleThemeSwitch}
                                className={`${classes.margin} fade-from-top`}
                            />
                            <Button
                                className={'fade-from-top'}
                                style={{ animationDelay: '600ms', }}
                                color="primary"
                                variant="outlined"
                                href="/resume.pdf"
                                target="_blank" rel="noopener noreferrer">
                                Resume
                            </Button>
                            <div className={classes.mobileNav}>
                                <IconButton className={classes.margin} onClick={() => { toggleDrawer(); }}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor={'right'} open={isOpenDrawer} onClose={() => { toggleDrawer(); }}>
                                    <List className={classes.drawerStyle}>
                                        <ListItem button onClick={() => { handleScroll(scrollToAbout); }}>
                                            <ListItemText primary="About" />
                                        </ListItem>
                                        <ListItem button onClick={() => { handleScroll(scrollToExperience); }}>
                                            <ListItemText primary="Experience" />
                                        </ListItem>
                                        <ListItem button onClick={() => { handleScroll(scrollToProjects); }}>
                                            <ListItemText primary="Projects" />
                                        </ListItem>
                                        <ListItem button onClick={() => { handleScroll(scrollToContact); }}>
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
};

export default Navbar;