import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => createStyles({
    skillsStyles: {
        display: "flex",
        alignItems: "center"
    },
    aboutContainerStyles: {
        maxWidth: "750px",
        marginBottom: "10rem"
    },
    skillsContainerStyles: {
        maxWidth: "550px",
        margin: "15px 0px"
    },
    mainText: {
        color: theme.palette.mainText.main
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <div className={classes.aboutContainerStyles}>
                <Typography variant="h3" component="h2" gutterBottom className={classes.mainText}>
                    My story
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Hello! I'm Brian, a Software Engineer based in Makati, Philippines.
                </Typography><br />
                <Typography variant="body1" component="p" gutterBottom>
                    I live my life by creating things on the internet, it could be a website, applications or anything. My goal is always to develop products that provide pixel-perfect, performant experience and learning new skills that would help me grow and level up as an individual.
                </Typography><br />
                <Typography variant="body1" component="p" gutterBottom>
                    Shortly after graduating from Far Eastern University, I joined the engineering team at YNS PH where I work on a wide variety of interesting and meaningful projects on a daily basis.
                </Typography><br />
                <Typography variant="body1" component="p" gutterBottom>
                    Here are a few technologies I've been working with recently:
                </Typography>
                <Grid container spacing={0} className={classes.skillsContainerStyles}>
                    <Grid item xs={6} className={classes.skillsStyles}>
                        <ArrowRightIcon fontSize="small" color="primary" /> Javascript (ES6+)
                    </Grid>
                    <Grid item xs={6} className={classes.skillsStyles}>
                        <ArrowRightIcon fontSize="small" color="primary" /> React
                    </Grid>
                    <Grid item xs={6} className={classes.skillsStyles}>
                        <ArrowRightIcon fontSize="small" color="primary" /> Node.js
                    </Grid>
                    <Grid item xs={6} className={classes.skillsStyles}>
                        <ArrowRightIcon fontSize="small" color="primary" /> PHP
                    </Grid>
                    <Grid item xs={6} className={classes.skillsStyles}>
                        <ArrowRightIcon fontSize="small" color="primary" /> HTML & CSS
                    </Grid>
                    <Grid item xs={6} className={classes.skillsStyles}>
                        <ArrowRightIcon fontSize="small" color="primary" /> SQL & NoSQL
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default About
