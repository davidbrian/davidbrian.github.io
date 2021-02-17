import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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
        maxHeight: "250px",
        overflow: "auto",
        "& div": {
            display: 'flex',
            marginBottom: theme.spacing(1.5),
            marginTop: theme.spacing(1.5)
        }
    },
    aboutContainer: {
        maxWidth: "1100px",
        marginBottom: "10rem"
    },
    mainText: {
        color: theme.palette.mainText.main
    },
}));
const Experience = () => {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);
    const isVertical = useMediaQuery('(min-width:960px)');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <div className={classes.aboutContainer}>
                <Typography variant="h3" component="h2" gutterBottom className={classes.mainText}>
                    Where I’ve Worked
                </Typography>
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
                        <Tab label="YNS PH" />
                        <Tab label="TSPG IT Solutions" />
                        <Tab label="Freelance" />
                    </Tabs>
                    <div className={classes.tabPanel}>
                        {
                            selectedTab === 2 &&
                            <Grid container spacing={0}>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Designed and developed a mobile responsive theme to improve the UI and
                                        UX of users of a web application. Tech stack: bootstrap, Aos.js, and jQuery
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Developed an attendance management system for a dance studio. Tech
                                        stack: RFID development kit, Bootstrap, jQuery, and PHP.
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Designed and developed a statistics monitoring system with e-commerce on
                                        the front side for a pineapple farm. Tech stack: Chart.js, Bootstrap, Facebook Messenger bot, PHP, and SQL.
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Developed a talent recruitment web application. Tech stack: PHP, Bootstrap, and jQuery
                                    </Typography>
                                </div>
                            </Grid>
                        }
                        {
                            selectedTab === 1 &&
                            <Grid container spacing={0}>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Worked on developing a web-based application for an online book of accounts and invoicing.
                                        Tech stack: Symfony, Bootstrap, Sass, and Webpack.
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Created wireframes and developed a website for an online House & Condo
                                        showcase portfolio. Tech stack: Adobe XD Symfony, Bootstrap, Sass,
                                        jQuery, and Webpack.
                                    </Typography>
                                </div>
                            </Grid>
                        }
                        {
                            selectedTab === 0 &&
                            <Grid container spacing={0}>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Developed a hybrid mobile app for a Japanese news company.
                                        Tech stack: Cakephp3, Onsen UI, AngularJs, Monaca, deep links with OG meta, and
                                        auto in-app update
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Developed a secure microservice that caters to millions of data by managing points for a POS system by communicating via the API.
                                        Tech stack: Swagger, Docker, and Cakephp3.
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Developed UI for POS system that communicates to the backend through API. Tech stack: Bootstrap, Vue Js, and CSS, API, Postman.
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Developed WordPress plugins for highlighting search keywords,
                                        importing/exporting data, pinning articles, notifications, a new theme
                                        that implements responsive breakpoints and more.
                                        Tech stack: WordPress( hooks and filters ), jQuery, jQuery UI,ThickBox, CSS, JS, and SQL.
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Develop a messenger bot for catering to the job inquiries of the company, and a request from a client.
                                        Tech stack: Line messaging API, Messenger Platform, Webhooks, Express Js, and Node Js.
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Designed and developed a web-based application for storing and comparing
                                        test evidence created by the QA's. Tech stack: Cakephp3, bootstrap, and
                                        jQuery.
                                    </Typography>
                                </div>
                                <div>
                                    <ArrowRightIcon fontSize="small" color="primary" />
                                    <Typography variant="body1" component="p">
                                        Updated the version of TinyMCE/WYSIWYG editor for a content management system. (https://www.bandai.com/) Tech stack: Js, and CSS.
                                    </Typography>
                                </div>
                            </Grid>
                        }
                    </div>
                </div>
            </div>
        </Grid>
    );
}

export default Experience
