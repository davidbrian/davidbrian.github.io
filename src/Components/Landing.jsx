import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import myImage from "../main-pic.png";
import { Button, Grid, Hidden, Typography } from '@material-ui/core';
import FadeInOnView from './Animation/FadeInView';

const useStyles = makeStyles((theme) => createStyles({
    pageContainer: {
        height: "90vh",
        marginBottom: "10vh"
    },
    stretch: {
        height: "100%",
        position: "relative"
    },
    responsiveImgContainer: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        height: "calc(100% - 10px)",
        background: theme.palette.secondary.main,
        '&:hover, &:focus, &:active': {
            '& img': {
                animation: '0',
                clipPath: 'none',
                transform: 'none',
            },
        },
    },
    responsiveImg: {
        maxWidth: "100%",
        height: "auto",
        animation: "glitch 500ms infinite alternate ease-in-out",
    },
    mainText: {
        color: theme.palette.mainText.main
    },
    itemContainer: {
        "& > *": {
            marginBottom: theme.spacing(2)
        }
    },
    imageBorder: {
        position: "absolute",
        zIndex: 1,
        borderRadius: "5px",
        border: `2px solid ${theme.palette.primary.main}`,
        transform: "translate(20px,20px)"
    },
    description: {
        maxWidth: "65%"
    }
}));

const Landing = ({ scrollToContact }) => {
    const classes = useStyles();

    return (
        <Grid
            container
            alignItems="stretch"
            className={classes.pageContainer}
        >
            <Grid item xs={12} sm={6}>
                <Grid container direction="column" justify="center" alignItems="center" className={classes.stretch}>
                    <FadeInOnView delay={700} >
                        <div className={classes.itemContainer}>
                            <Typography variant="body2" component="h3" color="primary" gutterBottom>
                                <strong>Hi, my name is</strong>
                            </Typography>
                            <Typography variant="h2" component="h1" className={classes.mainText}>
                                Brian David.
                            </Typography>
                            <Typography variant="h3" component="h2">
                                I build things for the web.
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.description}>
                                I’m a Software Engineer based in Makati, Philippines who focuses on writing clean, elegant and efficient code.
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={() => { scrollToContact(); }}>
                                Get in touch
                            </Button>
                        </div>
                    </FadeInOnView>
                </Grid>
            </Grid>
            <Hidden xsDown>
                <Grid item xs={12} sm={6}>
                    <Grid container direction="column" justify="center" alignItems="center" className={classes.stretch}>
                        <FadeInOnView delay={800}>
                            <div className={classes.responsiveImgContainer}>
                                <img id="landing-img" className={classes.responsiveImg} src={myImage} alt="logo" />
                            </div>
                        </FadeInOnView>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid >
    );
};

export default Landing;
