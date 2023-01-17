import { createStyles, makeStyles, Typography } from '@material-ui/core';
import skypass from '../Images/skypass.webp';
import ProjectItem from './Project/ProjectItem';
import FadeInOnView from './Animation/FadeInView';

const useStyles = makeStyles((theme) => createStyles({
    mainText: {
        color: theme.palette.mainText.main,
    },
}));

const Projects = () => {
    const classes = useStyles();

    const projectItems = Array.from({ length: 4 }, (_, i) => {
        const isRight = (i % 2) === 0;
        return (
            <FadeInOnView delay={100} key={i}>
                <ProjectItem
                    tools={['dummy', 'test']}
                    title="Sky Password"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere nisi autem necessitatibus quia ab debitis natus perspiciatis? Veritatis optio accusantium eveniet error accusamus sed maxime ratione minima aliquam nostrum."
                    isRight={isRight}
                    img={skypass}
                />
            </FadeInOnView>
        );
    });

    return (
        <>
            <FadeInOnView delay={0}>
                <Typography variant="h3" component="h2" gutterBottom className={classes.mainText}>
                    Things I've built
                </Typography>
            </FadeInOnView>
            {projectItems}
        </>
    );
};

export default Projects;


