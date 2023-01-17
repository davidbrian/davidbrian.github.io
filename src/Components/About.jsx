import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FadeInOnView from './Animation/FadeInView';

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
    const skills = [
        "Javascript (ES6+)",
        "React",
        "Node.js",
        "PHP",
        "HTML & CSS",
        "SQL & NoSQL"
    ];
    const skillList = skills.map((skill, index) => (
        <Grid item xs={6} key={index} className={classes.skillsStyles}>
            <ArrowRightIcon fontSize="small" color="primary" /> {skill}
        </Grid>
    ));

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <div className={classes.aboutContainerStyles}>
                <FadeInOnView delay={0}>
                    <Typography variant="h3" component="h2" gutterBottom className={classes.mainText}>
                        My story
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Hello! I'm Brian, a Software Engineer based in Makati, Philippines.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        I live my life by creating things on the internet, it could be a website, applications or anything. My goal is always to develop products that provide pixel-perfect, performant experience and learning new skills that would help me grow and level up as an individual.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        Shortly after graduating from Far Eastern University, I joined the engineering team at YNS PH where I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        Here are a few technologies I've been working with recently:
                    </Typography>
                    <Grid container spacing={0} className={classes.skillsContainerStyles}>
                        {skillList}
                    </Grid>
                </FadeInOnView>
            </div>
        </Grid>
    );
};

export default About;