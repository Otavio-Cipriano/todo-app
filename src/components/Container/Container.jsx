import { useTheme } from '../../contexts/ThemeContext'

export default function Container({ children }) {

    const { theme } = useTheme()

    return (
        <main className={`container main ${theme}`}>{children}</main>
    )
}
