import { createStyles, makeStyles, Typography } from '@material-ui/core'
import skypass from "../Images/skypass.png";
import React from 'react'
import ProjectItem from './Project/ProjectItem';

const useStyles = makeStyles((theme) => createStyles({
    mainText: {
        color: theme.palette.mainText.main
    }
}));

const Projects = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h3" component="h2" gutterBottom className={classes.mainText}>
                Things I've built
            </Typography>
            <ProjectItem
                tools={["dummy", "test"]}
                title="Sky Password"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere nisi autem necessitatibus quia ab debitis natus perspiciatis?
                        Veritatis optio accusantium eveniet error accusamus sed maxime ratione minima aliquam nostrum."
                isRight={true}
                img={skypass}
            />
            <ProjectItem
                tools={["dummy", "test"]}
                title="Sky Password"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere nisi autem necessitatibus quia ab debitis natus perspiciatis?
                        Veritatis optio accusantium eveniet error accusamus sed maxime ratione minima aliquam nostrum."
                isRight={false}
                img={skypass}
            />
            <ProjectItem
                tools={["dummy", "test"]}
                title="Sky Password"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere nisi autem necessitatibus quia ab debitis natus perspiciatis?
                        Veritatis optio accusantium eveniet error accusamus sed maxime ratione minima aliquam nostrum."
                isRight={true}
                img={skypass}
            />
        </>
    )
}

export default Projects
