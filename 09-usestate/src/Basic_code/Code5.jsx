import { useState } from "react"

const Code5 = () => {
  const [user, setUser] = useState(
    {
      name: "Apurba",
      age: 22
    }
  )
  // ei code e kunu value update korte hole js er de-structuring method use kora lagbe.
  function btnClicked () {
    const newUser = {...user}
    newUser.name = "Ovi"
    newUser.age = 23
    setUser(newUser)
  }
  return (
    <div>
      <h1>Name : {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default Code5
