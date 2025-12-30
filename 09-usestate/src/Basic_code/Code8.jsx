import { useState } from "react"

const Code8 = () => {
  const [num, setNum] = useState(0)
  const btnClicked = () => {
    console.log(num)
    setNum(num + 1)
    setNum(num + 1)
    setNum(num + 1)
    console.log(num)
    // eikhane 3 kore update howar kotha thakleo 1 kore update hosse.
  }
  const dblClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    // Eikhane # kore Update hosse.
  }
  return (
    <div>
      <h1>Num is : {num}</h1>
      <button onClick={btnClicked}>Click</button>
      <button onDoubleClick={dblClicked}>DblClick</button>
    </div>
  )
}

export default Code8

