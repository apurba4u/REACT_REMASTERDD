import React from 'react'

const Code2 = () => {
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(response)
  }
  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  )
}

export default Code2
