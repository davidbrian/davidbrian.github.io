import { createMuiTheme, CssBaseline, ThemeProvider, responsiveFontSizes } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import teal from '@material-ui/core/colors/teal';
import { createContext, useMemo, useEffect, useState } from "react";

// Contexts for theme and theme update
export const UpdateUserThemeContext = createContext();
export const UserThemeContext = createContext();

const Theme = ({ children }) => {
    // State to store the user selected theme
    const [userTheme, setUserTheme] = useState(null);

    // Themes available
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
    };

    // Valid themes
    const VALID_THEME = useMemo(() => ['darkTheme', 'lightTheme'], []);

    // Effect to get the theme from local storage on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('userTheme');
        if (VALID_THEME.includes(storedTheme)) {
            setUserTheme(storedTheme);
        } else {
            setUserTheme(VALID_THEME[0]);
        }
    }, [VALID_THEME]);

    // Effect to store the theme in local storage on update
    useEffect(() => {
        if (VALID_THEME.includes(userTheme)) {
            localStorage.setItem('userTheme', userTheme);
        }
    }, [userTheme, VALID_THEME]);

    // Get the current theme
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
    );
};

export default Theme;
