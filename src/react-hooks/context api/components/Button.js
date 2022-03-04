import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Button = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div>Active Button Mode: {theme}
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> Tema Değiştir</button>
        </div>
    )
}

export default Button