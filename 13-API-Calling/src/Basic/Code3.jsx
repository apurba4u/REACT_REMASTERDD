import React from 'react'

const Code3 = () => {
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
  }
  return (
    <div>
      <button onClick={getData}>Click</button>
      {/* Sate Sate response */}
    </div>
  )
}

export default Code3
