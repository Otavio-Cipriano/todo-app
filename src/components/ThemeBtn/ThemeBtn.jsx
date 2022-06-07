import { useTheme } from '../../contexts/ThemeContext'

export default function ThemeBtn() {
    const { theme, changeTheme } = useTheme()

    return (
        <div className="theme-btn" onClick={changeTheme}>
            {
                theme === 'dark' ?
                <img className="theme-btn__sun" src='/assets/icon-sun.svg' alt="sun icon" /> :
                <img className="theme-btn__moon" src='/assets/icon-moon.svg' alt="moon icon" />
            }
        </div>
    )
}
