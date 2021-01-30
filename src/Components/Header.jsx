import React, { useState } from "react"
import Button from "@material-ui/core/Button";
import myImage from "../main-pic.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WorkTitle from "./Header/WorkTitle";
import Navbar from "./Header/NavBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { animated, useSpring, config } from "react-spring";

const useStyles = makeStyles((theme) => createStyles({
    subText: {
        color: theme.palette.subText,
        position: "relative"
    },
    landingPage: {
        height: "100vh"
    },
    imageStyle: {
        background: theme.palette.subPrimary,
        borderRadius: "5px",
        zIndex: 2,
        position: "relative"
    },
    imageBorder: {
        height: "100%",
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        zIndex: 1,
        borderRadius: "5px",
        border: `2px solid ${theme.palette.primary.main}`,
    }
}));

const Header = () => {
    const classes = useStyles();
    const [isAnimated, setIsAnimated] = useState(false);
    const [animateBorder, setAnimateBorder] = useSpring(() => ({
        config: config.slow,
        transform: "translate(20px,20px)"
    }));

    setAnimateBorder({
        transform: isAnimated ? "translate(7px,7px)" : "translate(20px,20px)"
    })

    return (
        <>
            <Navbar />
            <Grid className={classes.landingPage} container alignContent="center">
                <Grid container item xs={12} md={8} alignContent="center">
                    <div>
                        <Typography color="primary" variant="caption" display="block" gutterBottom>
                            <strong>Hey, my name is</strong>
                        </Typography>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Brian David.
                        </Typography>
                        <Typography className={classes.subText} variant="h3" component="h1" gutterBottom>
                            I'm a <WorkTitle />
                        </Typography>
                        <Typography className={classes.subText} variant="subtitle1" color="textPrimary" style={{ width: "70%" }} gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores nihil necessitatibus, doloremque distinctio eligendi eos.
                        </Typography>
                        <Button variant="outlined" size="large" color="primary">
                            Get in touch
                    </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} style={{ position: "relative" }}>
                    <img className={classes.imageStyle} src={myImage} alt="logo" onMouseEnter={() => setIsAnimated(true)} onMouseLeave={() => setIsAnimated(false)} />
                    <animated.div style={animateBorder} className={classes.imageBorder}></animated.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Header
