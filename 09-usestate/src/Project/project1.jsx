import { useState } from "react"

const Project1 = () => {
  const [num, setNum] = useState(0)

  let increaseNum = () => {
    setNum(num + 1)
  }
  let decreaseNum = () => {
    setNum(num - 1)
  }
  let jump5num = () => {
    setNum(num + 5)
  }
  return (
    <div>
      <h1>Num is {num}</h1>
      <button onClick={increaseNum}>Increase by 1</button>
      <button onClick={decreaseNum}>decrease by 1</button>
      <button onClick={jump5num}>Increase by 5</button>
    </div>
  )
}

export default Project1
