import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FadeInOnView from './Animation/FadeInView';
import experiences from './Experience/experiences.json';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        }
    },
    tabsContainer: {
        flex: "1 0 250px",
        borderRight: `1px solid ${theme.palette.divider}`,
        borderBottom: "none",
        [theme.breakpoints.down('sm')]: {
            borderRight: "none",
            borderBottom: `1px solid ${theme.palette.divider}`,
            width: "100%"
        }
    },
    tabPanel: {
        padding: "10px",
        height: "250px",
        overflow: "auto",
        "& div": {
            display: 'flex',
            marginBottom: theme.spacing(1.5),
            marginTop: theme.spacing(1.5)
        }
    },
    aboutContainer: {
        maxWidth: "100%",
        marginBottom: "10rem"
    },
    mainText: {
        color: theme.palette.mainText.main
    },
}));
const Experience = () => {
    const companies = [
        "DBOS PH",
        "YNS PH",
        "TSPG IT SOLUTIONS",
        "Freelance"
    ];
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(companies[0]);
    const isVertical = useMediaQuery('(min-width:960px)');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <div className={classes.aboutContainer}>
                <FadeInOnView delay={0} >
                    <Typography variant="h3" component="h2" gutterBottom className={classes.mainText}>
                        Where I’ve Worked
                    </Typography>
                </FadeInOnView >
                <FadeInOnView delay={50} >
                    <div className={classes.root}>
                        <Tabs
                            className={classes.tabsContainer}
                            value={selectedTab}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            onChange={handleChange}
                            orientation={isVertical ? "vertical" : "horizontal"}
                        >
                            {companies.map((company, key) => {
                                return <Tab label={company} value={company} key={key} />;
                            })
                            }
                        </Tabs>
                        <div className={classes.tabPanel}>
                            <Grid container spacing={0}>
                                {
                                    experiences[selectedTab].map((experience, index) => {
                                        return (
                                            <Grid item xs={12} key={index}>
                                                <ArrowRightIcon fontSize="small" color="primary" />
                                                <Typography variant="body1" component="p">
                                                    {experience}
                                                </Typography>
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </div>
                    </div>
                </FadeInOnView>
            </div>
        </Grid >
    );
};

export default Experience;
