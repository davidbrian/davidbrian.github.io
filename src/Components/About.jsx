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
        "SQL & NoSQL",
        "Docker",
        "Tailwind",
        "Material UI",
        "Next JS",
        "Typescript",
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
                        Hello! My name is Brian and I work on the constantly changing and expanding field of software engineering. My interest in development began in 2017 when I decided to create a theme for a game website. I quickly realized how much I enjoyed coding and building things online.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        Upon completing my studies at Far Eastern University, I have made a commitment to continuously learning and expanding my skills as a developer. I always strive to stay updated with the latest technologies and industry developments, and am constantly seeking new opportunities to enhance my abilities. The journey thus far has been exhilarating and I am eager to see what the future holds for me as a software engineer.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        Throughout my career, I've had the opportunity to work as a freelancer, at a start-up, and an outsourcing company. My main focus these days is on building accessible and inclusive digital products and experiences for various clients.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        These are some of the technologies I've been working on:
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