import { useTheme } from '../context/ThemeContext'

const Header = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div>Active Header Mode : {theme}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> Tema Değiştir</button>
            <br/>
            <hr/>
        </div>
    )
}

export default Header