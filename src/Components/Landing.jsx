import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import myImage from "../main-pic.png";
import { Button, Grid, Hidden, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    pageContainer: {
        height: "90vh",
        marginBottom: "10vh"
    },
    stretch: {
        height: "100%",
        position: "relative"
    },
    responsiveImg: {
        maxWidth: "100%",
        height: "auto",
        background: theme.palette.secondary.main,
        borderRadius: "5px",
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
                        <Button variant="outlined" color="primary" onClick={() => { scrollToContact() }}>
                            Get in touch
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <Hidden xsDown>
                <Grid item xs={12} sm={6}>
                    <Grid container direction="column" justify="center" alignItems="center" className={classes.stretch}>
                        <img className={classes.responsiveImg} src={myImage} alt="logo" />
                    </Grid>
                </Grid>
            </Hidden>
        </Grid >
    )
}

export default Landing
