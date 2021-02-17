import { createMuiTheme, CssBaseline, ThemeProvider, responsiveFontSizes, fade } from "@material-ui/core"
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import teal from '@material-ui/core/colors/teal';

import React from "react"

export const UpdateUserThemeContext = React.createContext();
export const UserThemeContext = React.createContext();

const Theme = ({ children }) => {
    const [userTheme, setUserTheme] = React.useState(null);
    const themes = {
        lightTheme: {
            palette: {
                primary: {
                    main: teal[700]
                },
                secondary: {
                    main: teal[900],
                    contrastText: '#fff',
                },
                mainText: {
                    main: grey[900]
                }
            },
            typography: {
                allVariants: {
                    color: grey[700]
                },
            }
        },
        darkTheme: {
            palette: {
                type: "dark",
                primary: {
                    main: "#3eefff"
                },
                secondary: {
                    main: "#082e44"
                },
                mainText: {
                    main: blueGrey[50]
                },
                background: {
                    default: "#0a1f2f",
                    paper: "#06131c"
                }
            },
            typography: {
                allVariants: {
                    color: blueGrey[300]
                },
            }
        }
    }

    const VALID_THEME = React.useMemo(() => { return ['darkTheme', 'lightTheme'] }, []);

    React.useEffect(() => {
        let themeValue = localStorage.getItem('userTheme');
        if (VALID_THEME.includes(themeValue)) {
            setUserTheme(themeValue);
        } else {
            setUserTheme(VALID_THEME[0]);
        }
    }, []);

    React.useEffect(() => {
        if (VALID_THEME.includes(userTheme)) {
            localStorage.setItem('userTheme', userTheme);
        }
    }, [userTheme, VALID_THEME])

    let theme = createMuiTheme(VALID_THEME.includes(userTheme) ? themes[userTheme] : themes.darkTheme);
    theme = responsiveFontSizes(theme);

    return (
        <UpdateUserThemeContext.Provider value={setUserTheme}>
            <UserThemeContext.Provider value={userTheme}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </UserThemeContext.Provider >
        </UpdateUserThemeContext.Provider >
    )
}

export default Theme;
