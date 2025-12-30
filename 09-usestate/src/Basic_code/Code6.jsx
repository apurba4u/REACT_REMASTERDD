import { useState } from "react"

const Code6 = () => {
  const [num, setNum] = useState([10,20,30])

  // array element modify Method: 1
  const btnClicked = () => {
    const newNum = [...num]
    newNum.push([40,50,60])
    newNum.unshift([1,2,3,4])
    setNum(newNum)
  }
  return (
    <div>
      <h1>Num: {num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default Code6
