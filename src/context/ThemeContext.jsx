import { createContext, useState } from "react";

export const ThemeContext = createContext ();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] =useState(false)

    function toggleDarkMode() {
        setDarkMode (!isDarkMode)
    }
    return (
        <ThemeContext.Provider valor ={{isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}