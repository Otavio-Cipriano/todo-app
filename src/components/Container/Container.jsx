import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function Container({ children }) {

    const {globalTheme} = useContext(ThemeContext)

    return (
        <main className={`container main ${globalTheme}`}>{children}</main>
    )
}
