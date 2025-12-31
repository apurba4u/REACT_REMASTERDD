import { useState } from "react"
import Navbar from "./Navbar"

const UpDown = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div style={{padding: '10px'}}>
      <h1>Theme is : {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default UpDown
