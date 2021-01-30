import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useTheme from "@material-ui/core/styles/useTheme";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";

const SocialsGrid = withStyles({
    root: {
        height: "100%"
    }
})(Grid);


const Footer = () => {
    const theme = useTheme();
    const style = {
        position: "fixed",
        bottom: "0px",
        height: "300px",
        left: "30px"
    }
    const vl = {
        borderLeft: `2px solid ${theme.typography.body1.color}`,
        height: "100px",
        left: "50%",
        marginLeft: "-3px",
        top: "150px",
    }
    return (
        <div style={style}>
            <SocialsGrid container direction="column" alignItems="center" justify="space-between">
                <LanguageIcon />
                <LinkedInIcon />
                <GitHubIcon />
                <div style={vl}></div>
            </SocialsGrid>
        </div>
    )
}

export default Footer
