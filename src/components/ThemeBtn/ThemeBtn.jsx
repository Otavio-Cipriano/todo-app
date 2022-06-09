import { useTheme } from '../../contexts/ThemeContext'

import sunIcon from '../../assets/images/icon-sun.svg'
import moonIcon from '../../assets/images/icon-moon.svg'

export default function ThemeBtn() {
    const { theme, changeTheme } = useTheme()

    return (
        <div className="theme-btn" onClick={changeTheme}>
            {
                theme === 'dark' ?
                <img className="theme-btn__sun" src={sunIcon} alt="sun icon" /> :
                <img className="theme-btn__moon" src={moonIcon} alt="moon icon" />
            }
        </div>
    )
}
