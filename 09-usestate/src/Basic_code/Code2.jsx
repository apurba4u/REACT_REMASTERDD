import { useState } from "react"
const Code2 = () => {
  const [a, setA] = useState(0)
  const [name, setName] = useState('Default Name')
  const [users, setUsers] = useState([10,20,30])
  function changeEverything() {
    setName("Apurba Ovi")
    setA(a + 10)
    setUsers([30,40,50])
  }
  function getBack() {
    setName("Default Name")
    setA(0)
    setUsers([10,20,30])
  }
  return (
    <div>
      <h1>Value of a is : {a}</h1>
      <h1>Name is : {name}</h1>
      <h1>Default array is: {users}</h1>
      <button onClick={changeEverything} onDoubleClick={getBack}>ChangeEverything</button>
    </div>
  )
}

export default Code2
