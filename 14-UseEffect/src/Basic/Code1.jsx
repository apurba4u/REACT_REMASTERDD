import { useEffect, useState } from "react"


const Code1 = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect (() => {
    console.log("Use Effect is running")
  },[])
  return (
    <div className="bg-red-300 flex-col flex gap-10 items-center justify-between">
      <h1 className="bg-amber-200 font-medium">Num1: {num1}</h1>
      <h1 className="bg-amber-200 font-medium">Num2: {num2}</h1>
      <button className="bg-blue-400 text-green-400 px-10 py-20 m-10 text-xl" onClick={() => {
        setNum1(num1 + 10)
        setNum2(num2 + 10)
      }}> Click</button>
    </div>
  )
}

export default Code1
