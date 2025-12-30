import { useState } from "react"

const Code3 = () => {
  const [num, setNum] = useState(0)
  function btnClicked() {
    console.log(num)
    setNum(num + 10)
    console.log(num)
    // ei code ui e sate +10 update oibo. but clg e previous purana value ta dekaibo. karon eita asyncronise method e chole.
  }
  function dblClicked() {
    console.log(num)
    setNum(num)
    console.log(num)
    // ei code e react re render korbe nah.karon eikhane state change hoi nai, eikhane keno shudhu shudhu re render korbe. sejonno react value change korbe nah.
  }
  return (
    <div>
      <h1>Num is : {num}</h1>
      <button onClick={btnClicked}>Click</button>
      <button onClick={dblClicked}>DoubleClick</button>
    </div>
  )
}

export default Code3
