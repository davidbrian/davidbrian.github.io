import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core"
import blueGrey from "@material-ui/core/colors/blueGrey";

import React from "react"

const Theme = ({ children }) => {
    const theme = createMuiTheme({
        typography: {
            allVariants: {
                color: blueGrey[100]
            }
        },
        palette: {
            type: "dark",
            primary: {
                main: "#3eefff"
            },
            background: {
                default: "#0a1f2f",
            },
            subText: blueGrey[300],
            subPrimary: '#0a5c69'
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Theme
