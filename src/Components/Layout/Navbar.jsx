import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { animated, useSpring } from 'react-spring';
import { Button, Drawer, fade, IconButton, List, ListItem, ListItemText, Link, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { UpdateUserThemeContext, UserThemeContext } from '../../Theme';
import MaterialUISwitch from './MaterialUISwitch';

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
    },
    smallButton: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.75rem",
            padding: "4px 8px",
        }
    },
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

    useEffect(() => {
        setHeight(navRef.current.clientHeight);
    }, []);

    const [animatedAppBar, setAnimatedAppBar, stopAnimatedAppBar] = useSpring(() => ({
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"
    }));
    setAnimatedAppBar({
        boxShadow: isOnTop ? "0 2px 4px 0 rgba(0,0,0,0)" : "0 2px 4px 0 rgba(0,0,0,.2)"
    });

    const checkIfOnTop = useCallback(() => {
        stopAnimatedAppBar();
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        setIsOnTop(winScroll === 0);
    }, [setIsOnTop, stopAnimatedAppBar]);

    useEffect(() => {
        document.addEventListener('scroll', checkIfOnTop);
    }, [checkIfOnTop]);

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setIsOpenDrawer(!isOpenDrawer);
    };

    const setTheme = useContext(UpdateUserThemeContext);
    const theme = useContext(UserThemeContext);

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
        Experience: scrollToExperience,
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
                                        return (
                                            <Button
                                                className={`${classes.smallButton} fade-from-top`}
                                                key={t[0]}
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
                                href={process.env.PUBLIC_URL + '/brian-david-tabuada.pdf'}
                                target="_blank" rel="noopener noreferrer">
                                Resume
                            </Button>
                            <div className={classes.mobileNav}>
                                <IconButton className={classes.margin} onClick={() => { toggleDrawer(); }}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor={'right'} open={isOpenDrawer} onClose={() => { toggleDrawer(); }}>
                                    <List className={classes.drawerStyle}>
                                        {
                                            Object.entries(navigations).map(([name, onClick], index) => (
                                                <ListItem button onClick={() => { handleScroll(onClick); }} key={index}>
                                                    <ListItemText primary={name} />
                                                </ListItem>
                                            ))
                                        }
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