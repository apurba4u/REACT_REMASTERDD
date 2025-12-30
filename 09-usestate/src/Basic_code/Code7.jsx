import { useState } from "react"

const Code7 = () => {
  const [user, setUser] = useState(
    {
      name: "Apurba",
      age: 22
    }
  )
  const btnClicked = () => {
    setUser(prev => ({
      ...prev,
      name: "Ovi",
      age: 23
    }))
  }
  return (
    <div>
      <h1>Name: {user.name} <br />
      Age: {user.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default Code7

