import { createContext, useState } from "react";

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const ThemeContext = createContext({
    globalTheme: '',
    setGlobalTheme: () => {}
})

export default function ThemeContextParent({children}){
    const [theme, setTheme] = useState(LIGHT_THEME);

    const value = {
        globalTheme: theme,
        setGlobalTheme: setTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
