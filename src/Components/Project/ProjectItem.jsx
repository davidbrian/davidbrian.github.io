import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button, Chip, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    projectStyles: props => (
        {
            '& > *': {
                margin: theme.spacing(1),
            },
            textAlign: props.isRight ? "right" : "left",
            paddingLeft: props.isRight ? "5px" : "0px",
            paddingRight: props.isRight ? "0px" : "5px",
            [theme.breakpoints.down('sm')]: {
                textAlign: "left",
                padding: "0px",
            },
        }
    ),
    imageContainer: props => (
        {
            order: props.isRight ? 0 : 1,
            [theme.breakpoints.down('sm')]: {
                order: 0,
            }
        }
    ),
    responsiveImg: {
        maxWidth: "100%",
        height: "auto",
        background: theme.palette.primary.main,
        borderRadius: "5px",
    },
    toolsUsed: {
        "& > *": {
            marginRight: theme.spacing(1),
        }
    },
    projectItemContainer: {
        margin: "2rem 0rem 7rem 0rem",
    },
    mainText: {
        color: theme.palette.mainText.main
    },
    chipStyle: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
}));

const CodeButton = ({ onClick }) => {
    return (
        <Button variant="outlined" color="primary" startIcon={<GitHubIcon />} onClick={onClick}>
            Code
        </Button>
    );
};

const LiveButton = ({ onClick }) => {
    return (
        <Button variant="contained" color="primary" startIcon={<ExitToAppIcon />} onClick={onClick}>
            Live
        </Button>
    );
};

const ToolsUsed = ({ tools }) => {
    const classes = useStyles(tools);
    return (
        <div className={classes.toolsUsed}>
            {
                tools.map((tool) => {
                    return (
                        <Chip key={tool} label={tool} size="small" className={classes.chipStyle} />
                    );
                })
            }
        </div>
    );
};

const ProjectItem = (props) => {
    const { tools, title, description, img } = props;
    const classes = useStyles(props);
    return (
        <Grid container alignItems="center" className={classes.projectItemContainer}>
            <Grid item xs={12} md={8} className={classes.imageContainer}>
                <img className={classes.responsiveImg} src={img} alt="logo" />
            </Grid>
            <Grid item xs={12} md={4}>
                <div className={classes.projectStyles}>
                    <Typography variant="h4" component="h3" gutterBottom className={classes.mainText}>
                        {title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {description}
                    </Typography>
                    <ToolsUsed tools={tools} />
                    <CodeButton onClick={() => console.log("Code button clicked")} />
                    <LiveButton onClick={() => console.log("Live button clicked")} />
                </div>
            </Grid>
        </Grid>);
};

export default ProjectItem;
