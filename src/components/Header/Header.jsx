import { useTheme } from "../../contexts/ThemeContext"
import ThemeBtn from "../ThemeBtn/ThemeBtn"

export default function Header() {
  const { theme } = useTheme()

  return (
    <div className={`header ${theme}`}>
      <div className="header__wrap">
        <h1>Todo</h1>
        <ThemeBtn/>
      </div>
    </div>
  )
}