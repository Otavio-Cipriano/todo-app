import { createContext, useContext, useState } from "react";

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

const ThemeContext = createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export default function ThemeContextParent({children}){
    const [theme, setTheme] = useState(LIGHT_THEME);

    const changeTheme = () => {
        if(theme === LIGHT_THEME) return setTheme(DARK_THEME);

        return setTheme(LIGHT_THEME)
    }

    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
