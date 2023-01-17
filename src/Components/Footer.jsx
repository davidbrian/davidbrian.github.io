import { Button, CircularProgress, createStyles, Grid, IconButton, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import DoneIcon from '@material-ui/icons/Done';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { green, red } from '@material-ui/core/colors';
import SendIcon from '@material-ui/icons/Send';
import { useCallback, useEffect, useState } from 'react';
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
    const [status, setStatus] = useState('');
    const [result, setResult] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [scrolled, setScrolled] = useState('0%');

    const submitForm = async (ev) => {
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
        try {
            const res = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    "Accept": "application/json"
                }
            });
            const json = await res.json();
            if (res.ok) {
                form.reset();
                setEmail('');
                setMessage('');
                setStatus('SENT');
                setResult("Thank you for reaching out!");
            } else {
                setStatus('FAILED');
                setResult(json.error);
            }
        } catch (err) {
            setStatus('FAILED');
            setResult("There was an error with your request. Please try again later.");
        }
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

    const handleScroll = useCallback(() => {
        stopProgressAnimation();
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        setScrolled(scrolled + "%");
    }, [setScrolled, stopProgressAnimation]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (<>
        <div className={classes.centerPaper}>
            <Paper elevation={3} className={classes.contactContainer}>
                <Typography variant="h4" component="h2" gutterBottom className={classes.mainText}>
                    Get in touch
                </Typography>
                <form onSubmit={submitForm} action="https://formspree.io/f/xyybvode" method="POST">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                error={status.includes("requiredEmail")}
                                helperText={status.includes("requiredEmail") ? 'Email is required.' : ''}
                                id="email"
                                type="email"
                                label="Email"
                                fullWidth
                                name="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={status.includes("requiredMessage")}
                                helperText={status.includes("requiredMessage") ? 'Message is required.' : ''}
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
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            style={{ marginLeft: ".6rem" }}
                        >
                            <Grid item>
                                {status === 'LOADING' && <CircularProgress color="primary" size={20} />}
                                {status === 'SENT' && <DoneIcon style={{ color: green[500], verticalAlign: "middle" }} />}
                                {status === 'FAILED' && <ErrorOutlineIcon style={{ color: red[500] }} />}
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" component="p"  >&nbsp;{result}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
        <div className={`${classes.socialContainer} fade-from-left`} style={{ animationDelay: '900ms' }}>
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
