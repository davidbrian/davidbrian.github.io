import { Button, CircularProgress, createStyles, Grid, IconButton, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import DoneIcon from '@material-ui/icons/Done';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { green, red } from '@material-ui/core/colors';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const useStyles = makeStyles((theme) => createStyles({
    contactContainer: {
        margin: "5rem 0px",
        maxWidth: "40rem",
        padding: "2rem",
        alignSelf: "center",
        borderRadius: "5px"
    },
    centerPaper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    socialContainer: {
        bottom: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        left: "30px",
        '& > *': {
            marginBottom: theme.spacing(5),
        },
        [theme.breakpoints.down('sm')]: {
            position: "static",
            flexDirection: "row",
            justifyContent: "space-around"
        },
    },
    verticalProgressContainer: {
        background: fade(theme.typography.body2.color, 0.3),
        height: "40vh",
        width: "2px",
        marginBottom: "10vh",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    progress: {
        width: "100%",
        background: theme.palette.primary.main
    },
    mainText: {
        color: theme.palette.mainText.main
    },
    signStyle: {
        textAlign: "center",
        marginBottom: theme.spacing(3)
    },
    iconButton: {
        color: theme.typography.body2.color,
        margin: `${theme.spacing(1)}px 0px`
    }
}));


const Footer = () => {
    const classes = useStyles();
    const [status, setStatus] = React.useState('');
    const [result, setResult] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [scrolled, setScrolled] = React.useState('0%');

    const submitForm = (ev) => {
        ev.preventDefault();
        setStatus('LOADING');
        const form = ev.target;
        const data = new FormData(form);
        if (email === '' || message === '') {
            let errStatus = '';
            if (email.trim() === '') {
                errStatus = `${errStatus}requiredEmail`;
            }
            if (message.trim() === '') {
                errStatus = `${errStatus}requiredMessage`;
            }
            setStatus(errStatus);
            return;
        }
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            let data = JSON.parse(xhr.response);
            if (xhr.status === 200) {
                form.reset();
                setEmail('');
                setMessage('');
                setStatus('SENT');
                setResult("Thank you for reaching out!");
            } else {
                setStatus('FAILED');
                setResult(data.error);
            }
        };
        xhr.send(data);
    };

    const [
        progressAnimation,
        setProgressAnimation,
        stopProgressAnimation
    ] = useSpring(() => (
        {
            config: config.molasses,
            from: { height: "100%" },
            to: { height: "0%" }
        }
    ));

    setProgressAnimation({ height: scrolled });

    const handleScroll = React.useCallback(() => {
        stopProgressAnimation();
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        setScrolled(scrolled + "%");
    }, [setScrolled, stopProgressAnimation]);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <>
            <div className={classes.centerPaper}>
                <Paper elevation={3} className={classes.contactContainer}>
                    <Typography variant="h4" component="h2" gutterBottom className={classes.mainText}>
                        Get in touch
                    </Typography>
                    <form onSubmit={submitForm} action="https://formspree.io/f/xyybvode" method="POST">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    {
                                    ...(
                                        status.includes("requiredEmail") ?
                                            {
                                                error: true,
                                                helperText: 'Email is required.'

                                            }
                                            :
                                            {}
                                    )
                                    }
                                    id="email"
                                    type="email"
                                    label="Email"
                                    fullWidth
                                    name="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {
                                    ...(
                                        status.includes("requiredMessage") ?
                                            {
                                                error: true,
                                                helperText: 'Message is required.'

                                            }
                                            :
                                            {}
                                    )
                                    }
                                    id="message"
                                    label="Message"
                                    multiline
                                    fullWidth
                                    rowsMax={4}
                                    name="message"
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value); }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<SendIcon />}
                                    type="submit"
                                >Send</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" component="p" gutterBottom style={{ verticalAlign: "middle" }}>
                                    {status === 'LOADING' && <CircularProgress color="primary" size={20} />}
                                    {status === 'SENT' && <DoneIcon style={{ color: green[500], verticalAlign: "middle" }} />}
                                    {status === 'FAILED' && <ErrorOutlineIcon style={{ color: red[500] }} />}
                                    {result}
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </div>
            <div
                className={`${classes.socialContainer} fade-from-left`}
                style={{ animationDelay: '1.2s', }}
            >
                <div className={classes.verticalProgressContainer} >
                    <animated.div className={classes.progress} style={progressAnimation}></animated.div>
                </div>
                <IconButton className={classes.iconButton} href="https://davidbrian.github.io/" target="_blank">
                    <LanguageIcon />
                </IconButton>
                <IconButton className={classes.iconButton} href="https://www.linkedin.com/in/brian-david-754a33202/" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                <IconButton className={classes.iconButton} href="https://github.com/davidbrian" target="_blank">
                    <GitHubIcon />
                </IconButton>
            </div>
            <Typography variant="body2" className={classes.signStyle}>
                <Link href="https://github.com/davidbrian" target="_blank" variant="body2" underline="none">
                    Designed & Developed by Brian David
                </Link>
            </Typography>
        </>
    );
};

export default Footer;
