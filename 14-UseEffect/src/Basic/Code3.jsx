import { useEffect, useState } from "react"

const Code3 = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging() {
    console.log("A er value change oitase")
  }
  function bChanging() {
    console.log("B er value change oitase")
  }
  useEffect(() => {
    console.log("UseEffect is running")
  },[a])

  return (
    <div>
      <h1 className="p-10 mx-10 border-2 border-red-300">A: {a}</h1>
      <h1 className="p-10 mx-10 border-2 border-red-300">B: {b}</h1>
      <div className="flex justify-between">
        <button className="bg-red-600 border-none text-white" 
      onClick={() => {
        setA(a + 1)
        aChanging()
      }}>Change A</button>
      <button className="bg-red-600 border-none text-white" 
      onClick={() => {
        setB(b - 1)
        bChanging()
      }}>Change B</button>
      </div>
    </div>
  )
}

export default Code3
