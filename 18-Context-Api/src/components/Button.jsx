import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"

const Button = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)
  function changeTheme() {
    if(theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme <i>{theme}</i></button>
    </div>
  )
}

export default Button
