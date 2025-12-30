import React from 'react'

const Code1 = () => {
  function getData() {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
  }
  // Data aste kisu Time lagbe
  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  )
}

export default Code1
