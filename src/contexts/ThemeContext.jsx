import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

const ThemeContext = createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export default function ThemeContextParent({children}){
    const {saveAtLocalStorage, storage} = useLocalStorage('Theme')
    const [theme, setTheme] = useState( storage ?  storage : LIGHT_THEME);

    const changeTheme = () => {
        if(theme === LIGHT_THEME){
            saveAtLocalStorage(DARK_THEME)
            return setTheme(DARK_THEME);
        }
        saveAtLocalStorage(LIGHT_THEME)
        return setTheme(LIGHT_THEME)
    }

    useEffect(()=>{
        saveAtLocalStorage(theme)

        // eslint-disable-next-line
    },[theme])

    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
